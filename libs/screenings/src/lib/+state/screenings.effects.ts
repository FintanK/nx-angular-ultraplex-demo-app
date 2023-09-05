import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap } from 'rxjs';
import { ScreeningsService } from '../services/screenings.service';
import * as ScreeningsActions from './screenings.actions';

@Injectable()
export class ScreeningsEffects {
  private actions$ = inject(Actions);

  constructor(public screeningsService: ScreeningsService) {}

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ScreeningsActions.initScreenings),
      switchMap((action) => {
        return this.screeningsService.getScreenings(action.cinemaId).pipe(
          switchMap((screenings: any) => {
            return [
              ScreeningsActions.loadScreeningsSuccess({
                screenings: screenings.content,
              }),
            ];
          })
        );
      }),
      catchError((error) => {
        console.error('Error', error);
        return of(ScreeningsActions.loadScreeningsFailure({ error }));
      })
    )
  );
}
