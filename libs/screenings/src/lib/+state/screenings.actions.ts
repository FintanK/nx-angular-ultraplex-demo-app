import { createAction, props } from '@ngrx/store';
import { ScreeningsEntity } from './screenings.models';

export const initScreenings = createAction(
  '[Screenings Page] Init',
  props<{ cinemaId: string }>()
);

export const loadScreeningsSuccess = createAction(
  '[Screenings/API] Load Screenings Success',
  props<{ screenings: ScreeningsEntity[] }>()
);

export const loadScreeningsFailure = createAction(
  '[Screenings/API] Load Screenings Failure',
  props<{ error: any }>()
);
