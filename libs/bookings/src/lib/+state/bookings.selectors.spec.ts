import { BookingsEntity } from './bookings.models';
import {
  bookingsAdapter,
  BookingsPartialState,
  initialBookingsState,
} from './bookings.reducer';
import * as BookingsSelectors from './bookings.selectors';

describe('Bookings Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getBookingsId = (it: BookingsEntity) => it.id;
  const createBookingsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as BookingsEntity);

  let state: BookingsPartialState;

  beforeEach(() => {
    state = {
      bookings: bookingsAdapter.setAll(
        [
          createBookingsEntity('PRODUCT-AAA'),
          createBookingsEntity('PRODUCT-BBB'),
          createBookingsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialBookingsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Bookings Selectors', () => {
    it('selectAllBookings() should return the list of Bookings', () => {
      const results = BookingsSelectors.selectAllBookings(state);
      const selId = getBookingsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = BookingsSelectors.selectEntity(state) as BookingsEntity;
      const selId = getBookingsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectBookingsLoaded() should return the current "loaded" status', () => {
      const result = BookingsSelectors.selectBookingsLoaded(state);

      expect(result).toBe(true);
    });

    it('selectBookingsError() should return the current "error" state', () => {
      const result = BookingsSelectors.selectBookingsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
