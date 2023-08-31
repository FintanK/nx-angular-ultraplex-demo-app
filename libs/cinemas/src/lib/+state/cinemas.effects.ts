import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap } from 'rxjs';
import { CinemasService } from '../services/cinemas.service';
import * as CinemasActions from './cinemas.actions';

@Injectable()
export class CinemasEffects {
  private actions$ = inject(Actions);

  constructor(public cinemasService: CinemasService) {}

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
}
