import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { MoviesService } from '../services/movies.service';
import * as MoviesActions from './movies.actions';

@Injectable()
export class MoviesEffects {
  private actions$ = inject(Actions);

  constructor(public movieService: MoviesService) {}

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.initMovies),
      switchMap(() => {
        return this.movieService.getMovies().pipe(
          map((movies: any) => {
            return MoviesActions.loadMoviesSuccess({ movies: movies.content });
          })
        );
      }),
      catchError((error) => {
        console.error('Error', error);
        return of(MoviesActions.loadMoviesFailure({ error }));
      })
    )
  );
}
