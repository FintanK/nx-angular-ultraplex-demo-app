import { createAction, props } from '@ngrx/store';
import { CinemasEntity } from './cinemas.models';

export const initCinemas = createAction('[Cinemas Page] Init');

export const loadCinemasSuccess = createAction(
  '[Cinemas/API] Load Cinemas Success',
  props<{ cinemas: CinemasEntity[] }>()
);

export const loadCinemasFailure = createAction(
  '[Cinemas/API] Load Cinemas Failure',
  props<{ error: any }>()
);
