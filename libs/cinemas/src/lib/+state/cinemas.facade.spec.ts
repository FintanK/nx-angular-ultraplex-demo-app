import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { readFirst } from '@nx/angular/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MaterialModule } from '@org/material';
import * as CinemasActions from './cinemas.actions';
import { CinemasEffects } from './cinemas.effects';
import { CinemasFacade } from './cinemas.facade';
import { CinemasEntity } from './cinemas.models';
import {
  CINEMAS_FEATURE_KEY,
  CinemasState,
  cinemasReducer,
} from './cinemas.reducer';

interface TestSchema {
  cinemas: CinemasState;
}

describe('CinemasFacade', () => {
  let facade: CinemasFacade;
  let store: Store<TestSchema>;
  const createCinemasEntity = (id: string, name = ''): CinemasEntity => ({
    id,
    name: name || `name-${id}`,
    screens: [],
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          HttpClientTestingModule,
          MaterialModule,
          StoreModule.forFeature(CINEMAS_FEATURE_KEY, cinemasReducer),
          EffectsModule.forFeature([CinemasEffects]),
        ],
        providers: [CinemasFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          HttpClientTestingModule,
          MaterialModule,
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(CinemasFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allCinemas$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allCinemas$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
    });

    /**
     * Use `loadCinemasSuccess` to manually update list
     */
    it('allCinemas$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allCinemas$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        CinemasActions.loadCinemasSuccess({
          cinemas: [createCinemasEntity('AAA'), createCinemasEntity('BBB')],
        })
      );

      list = await readFirst(facade.allCinemas$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
