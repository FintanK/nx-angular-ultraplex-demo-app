import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap } from 'rxjs';
import { BookingsService } from '../services/bookings.service';
import * as BookingsActions from './bookings.actions';

@Injectable()
export class BookingsEffects {
  private actions$ = inject(Actions);

  constructor(public bookingsService: BookingsService) {}

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingsActions.initBookings),
      switchMap(() =>
        this.bookingsService.getBookings().pipe(
          switchMap((bookings: any) => {
            return [
              BookingsActions.loadBookingsSuccess({
                bookings: bookings.content,
              }),
            ];
          })
        )
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(BookingsActions.loadBookingsFailure({ error }));
      })
    )
  );

  addNewBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingsActions.addNewBooking),
      switchMap((action) => {
        return this.bookingsService
          .addBooking(action.screeningId.toString(), action.seats)
          .pipe(
            switchMap(() => {
              return [
                BookingsActions.addNewBookingSuccess(),
                BookingsActions.initBookings(),
              ];
            })
          );
      }),
      catchError((error) => {
        console.error('Error', error);
        return of(BookingsActions.addNewBookingFailure({ error }));
      })
    )
  );
}
