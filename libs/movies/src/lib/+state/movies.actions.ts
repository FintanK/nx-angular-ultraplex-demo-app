import { createAction, props } from '@ngrx/store';
import { MoviesEntity } from './movies.models';

export const initMovies = createAction('[Movies Page] Init');

export const loadMoviesSuccess = createAction(
  '[Movies/API] Load Movies Success',
  props<{ movies: MoviesEntity[] }>()
);

export const loadMoviesFailure = createAction(
  '[Movies/API] Load Movies Failure',
  props<{ error: any }>()
);

export const addNewMovie = createAction('[Movies Page] Add New Movie', props<{ movieName: string }>());
export const addNewMovieSuccess = createAction('[Movies/API] Add New Movie Success');
export const addNewMovieFailure = createAction('[Movies/API] Add New Movie Failure', props<{ error: any }>());