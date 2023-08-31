import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as BookingsActions from './bookings.actions';
import * as BookingsFeature from './bookings.reducer';

@Injectable()
export class BookingsEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingsActions.initBookings),
      switchMap(() =>
        of(BookingsActions.loadBookingsSuccess({ bookings: [] }))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(BookingsActions.loadBookingsFailure({ error }));
      })
    )
  );
}
