import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { readFirst } from '@nx/angular/testing';

import { HttpClientModule } from '@angular/common/http';
import * as ScreeningsActions from './screenings.actions';
import { ScreeningsEffects } from './screenings.effects';
import { ScreeningsFacade } from './screenings.facade';
import { ScreeningsEntity } from './screenings.models';
import {
  SCREENINGS_FEATURE_KEY,
  ScreeningsState,
  screeningsReducer,
} from './screenings.reducer';

interface TestSchema {
  screenings: ScreeningsState;
}

describe('ScreeningsFacade', () => {
  let facade: ScreeningsFacade;
  let store: Store<TestSchema>;
  const createScreeningsEntity = (id: string, name = ''): ScreeningsEntity => ({
    id,
    cinemaName: name || `name-${id}`,
    screenName: 'screenName',
    start: new Date(),
    movie: {
      id: '1',
      name: 'name',
      runtime: 1,
    },
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          HttpClientModule,
          StoreModule.forFeature(SCREENINGS_FEATURE_KEY, screeningsReducer),
          EffectsModule.forFeature([ScreeningsEffects]),
        ],
        providers: [ScreeningsFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          HttpClientModule,
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(ScreeningsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allScreenings$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init('1');

      list = await readFirst(facade.allScreenings$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
    });

    /**
     * Use `loadScreeningsSuccess` to manually update list
     */
    it('allScreenings$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allScreenings$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        ScreeningsActions.loadScreeningsSuccess({
          screenings: [
            createScreeningsEntity('AAA'),
            createScreeningsEntity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allScreenings$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
