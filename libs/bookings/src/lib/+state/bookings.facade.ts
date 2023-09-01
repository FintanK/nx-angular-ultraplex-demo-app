import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as BookingsActions from './bookings.actions';
import * as BookingsFeature from './bookings.reducer';
import * as BookingsSelectors from './bookings.selectors';

@Injectable()
export class BookingsFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(BookingsSelectors.selectBookingsLoaded));
  allBookings$ = this.store.pipe(select(BookingsSelectors.selectAllBookings));
  selectedBookings$ = this.store.pipe(select(BookingsSelectors.selectEntity));

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(BookingsActions.initBookings());
  }

  addNewBooking(screeningId: number, seats: number) {
    this.store.dispatch(
      BookingsActions.addNewBooking({
        screeningId,
        seats,
      })
    );
  }
}
