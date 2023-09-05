import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { readFirst } from '@nx/angular/testing';

import * as BookingsActions from './bookings.actions';
import { BookingsEffects } from './bookings.effects';
import { BookingsFacade } from './bookings.facade';
import { BookingsEntity } from './bookings.models';
import {
  BOOKINGS_FEATURE_KEY,
  BookingsState,
  bookingsReducer,
} from './bookings.reducer';

import { HttpClientTestingModule } from '@angular/common/http/testing';

interface TestSchema {
  bookings: BookingsState;
}

describe('BookingsFacade', () => {
  let facade: BookingsFacade;
  let store: Store<TestSchema>;
  const createBookingsEntity = (id: string, name = ''): BookingsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(BOOKINGS_FEATURE_KEY, bookingsReducer),
          EffectsModule.forFeature([BookingsEffects]),
        ],
        providers: [BookingsFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          HttpClientTestingModule,
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(BookingsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allBookings$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allBookings$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
    });

    /**
     * Use `loadBookingsSuccess` to manually update list
     */
    it('allBookings$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allBookings$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        BookingsActions.loadBookingsSuccess({
          bookings: [createBookingsEntity('AAA'), createBookingsEntity('BBB')],
        })
      );

      list = await readFirst(facade.allBookings$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
