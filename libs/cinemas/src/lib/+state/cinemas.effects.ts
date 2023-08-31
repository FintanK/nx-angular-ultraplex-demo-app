import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as CinemasActions from './cinemas.actions';
import * as CinemasFeature from './cinemas.reducer';

@Injectable()
export class CinemasEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CinemasActions.initCinemas),
      switchMap(() => of(CinemasActions.loadCinemasSuccess({ cinemas: [] }))),
      catchError((error) => {
        console.error('Error', error);
        return of(CinemasActions.loadCinemasFailure({ error }));
      })
    )
  );
}
