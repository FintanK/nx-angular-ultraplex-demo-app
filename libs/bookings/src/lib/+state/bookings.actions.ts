import { createAction, props } from '@ngrx/store';
import { BookingsEntity } from './bookings.models';

export const initBookings = createAction('[Bookings Page] Init');

export const loadBookingsSuccess = createAction(
  '[Bookings/API] Load Bookings Success',
  props<{ bookings: BookingsEntity[] }>()
);

export const loadBookingsFailure = createAction(
  '[Bookings/API] Load Bookings Failure',
  props<{ error: any }>()
);
