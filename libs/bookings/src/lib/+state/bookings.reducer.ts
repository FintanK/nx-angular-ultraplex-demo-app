import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as BookingsActions from './bookings.actions';
import { BookingsEntity } from './bookings.models';

export const BOOKINGS_FEATURE_KEY = 'bookings';

export interface BookingsState extends EntityState<BookingsEntity> {
  selectedId?: string | number; // which Bookings record has been selected
  loaded: boolean; // has the Bookings list been loaded
  error?: string | null; // last known error (if any)
}

export interface BookingsPartialState {
  readonly [BOOKINGS_FEATURE_KEY]: BookingsState;
}

export const bookingsAdapter: EntityAdapter<BookingsEntity> =
  createEntityAdapter<BookingsEntity>();

export const initialBookingsState: BookingsState =
  bookingsAdapter.getInitialState({
    // set initial required properties
    loaded: false,
  });

const reducer = createReducer(
  initialBookingsState,
  on(BookingsActions.initBookings, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(BookingsActions.loadBookingsSuccess, (state, { bookings }) =>
    bookingsAdapter.setAll(bookings, { ...state, loaded: true })
  ),
  on(BookingsActions.loadBookingsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function bookingsReducer(
  state: BookingsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
