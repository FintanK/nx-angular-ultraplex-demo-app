import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  BOOKINGS_FEATURE_KEY,
  BookingsState,
  bookingsAdapter,
} from './bookings.reducer';

// Lookup the 'Bookings' feature state managed by NgRx
export const selectBookingsState =
  createFeatureSelector<BookingsState>(BOOKINGS_FEATURE_KEY);

const { selectAll, selectEntities } = bookingsAdapter.getSelectors();

export const selectBookingsLoaded = createSelector(
  selectBookingsState,
  (state: BookingsState) => state.loaded
);

export const selectBookingsError = createSelector(
  selectBookingsState,
  (state: BookingsState) => state.error
);

export const selectAllBookings = createSelector(
  selectBookingsState,
  (state: BookingsState) => selectAll(state)
);

export const selectBookingsEntities = createSelector(
  selectBookingsState,
  (state: BookingsState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectBookingsState,
  (state: BookingsState) => state.selectedId
);

export const selectEntity = createSelector(
  selectBookingsEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
