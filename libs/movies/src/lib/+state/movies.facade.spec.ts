import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { readFirst } from '@nx/angular/testing';

import * as MoviesActions from './movies.actions';
import { MoviesEffects } from './movies.effects';
import { MoviesFacade } from './movies.facade';
import { MoviesEntity } from './movies.models';
import {
  MOVIES_FEATURE_KEY,
  MoviesState,
  initialMoviesState,
  moviesReducer,
} from './movies.reducer';
import * as MoviesSelectors from './movies.selectors';

interface TestSchema {
  movies: MoviesState;
}

describe('MoviesFacade', () => {
  let facade: MoviesFacade;
  let store: Store<TestSchema>;
  const createMoviesEntity = (id: string, name = ''): MoviesEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(MOVIES_FEATURE_KEY, moviesReducer),
          EffectsModule.forFeature([MoviesEffects]),
        ],
        providers: [MoviesFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(MoviesFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allMovies$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allMovies$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadMoviesSuccess` to manually update list
     */
    it('allMovies$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allMovies$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        MoviesActions.loadMoviesSuccess({
          movies: [createMoviesEntity('AAA'), createMoviesEntity('BBB')],
        })
      );

      list = await readFirst(facade.allMovies$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
