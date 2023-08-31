import { Action } from '@ngrx/store';

import * as BookingsActions from './bookings.actions';
import { BookingsEntity } from './bookings.models';
import {
  BookingsState,
  initialBookingsState,
  bookingsReducer,
} from './bookings.reducer';

describe('Bookings Reducer', () => {
  const createBookingsEntity = (id: string, name = ''): BookingsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Bookings actions', () => {
    it('loadBookingsSuccess should return the list of known Bookings', () => {
      const bookings = [
        createBookingsEntity('PRODUCT-AAA'),
        createBookingsEntity('PRODUCT-zzz'),
      ];
      const action = BookingsActions.loadBookingsSuccess({ bookings });

      const result: BookingsState = bookingsReducer(
        initialBookingsState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = bookingsReducer(initialBookingsState, action);

      expect(result).toBe(initialBookingsState);
    });
  });
});
