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

export const addNewCinema = createAction(
  '[Cinemas Page] Add New Cinema',
  props<{ cinemaName: string }>()
);
export const addNewCinemaSuccess = createAction(
  '[Cinemas/API] Add New Cinema Success'
);
export const addNewCinemaFailure = createAction(
  '[Cinemas/API] Add New Cinema Failure',
  props<{ error: any }>()
);

export const addNewScreen = createAction(
  '[Cinemas Page] Add New Screen',
  props<{ screenName: string; cinemaId: number }>()
);
export const addNewScreenSuccess = createAction(
  '[Cinemas/API] Add New Screen Success'
);
export const addNewScreenFailure = createAction(
  '[Cinemas/API] Add New Screen Failure',
  props<{ error: any }>()
);
