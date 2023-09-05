import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap } from 'rxjs';
import { CinemasService } from '../services/cinemas.service';
import * as CinemasActions from './cinemas.actions';
import { ScreeningsService } from '../services/screenings.service';
@Injectable()
export class CinemasEffects {
  private actions$ = inject(Actions);

  constructor(
    public cinemasService: CinemasService,
    public screeningsService: ScreeningsService,
    public _snackBar: MatSnackBar
  ) {}

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CinemasActions.initCinemas),
      switchMap(() => {
        return this.cinemasService.getCinemas().pipe(
          switchMap((cinemas: any) => {
            return [
              CinemasActions.loadCinemasSuccess({ cinemas: cinemas.content }),
            ];
          })
        );
      }),
      catchError((error) => {
        console.error('Error', error);
        return of(CinemasActions.loadCinemasFailure({ error }));
      })
    )
  );

  addNewCinema$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CinemasActions.addNewCinema),
      switchMap((action) => {
        return this.cinemasService.addNewCinema(action.cinemaName).pipe(
          switchMap(() => {
            this._snackBar.open('Cinema Added Successfully', 'Close');
            return [
              CinemasActions.addNewCinemaSuccess(),
              CinemasActions.initCinemas(),
            ];
          })
        );
      }),
      catchError((error) => {
        console.error('Error', error);
        this._snackBar.open(
          'There was an issue adding the new cinema, please try again',
          'Close'
        );
        return of(CinemasActions.addNewCinemaFailure({ error }));
      })
    )
  );

  addNewScreen$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CinemasActions.addNewScreen),
      switchMap((action) => {
        return this.cinemasService
          .addNewScreen(action.cinemaId.toString(), action.screenName)
          .pipe(
            switchMap(() => {
              this._snackBar.open('Screen Added Successfully', 'Close');
              return [
                CinemasActions.addNewScreenSuccess(),
                CinemasActions.initCinemas(),
              ];
            })
          );
      }),
      catchError((error) => {
        console.error('Error', error);
        this._snackBar.open(
          'There was an issue adding the new screen, please try again',
          'Close'
        );
        return of(CinemasActions.addNewScreenFailure({ error }));
      })
    )
  );
}
