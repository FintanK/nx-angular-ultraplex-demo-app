import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { MoviesService } from '../services/movies.service';
import * as MoviesActions from './movies.actions';

@Injectable()
export class MoviesEffects {
  private actions$ = inject(Actions);

  constructor(
    public movieService: MoviesService,
    public _snackBar: MatSnackBar
  ) {}

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

  addNewMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.addNewMovie),
      switchMap((action) => {
        return this.movieService.addNewMovie(action.movieName).pipe(
          switchMap(() => {
            this._snackBar.open('Movie Added Successfully', 'Close');
            return [
              MoviesActions.addNewMovieSuccess(),
              MoviesActions.initMovies(),
            ];
          })
        );
      }),
      catchError((error) => {
        console.error('Error', error);
        this._snackBar.open(
          'There was an issue adding the new movie, please try again',
          'Close'
        );
        return of(MoviesActions.addNewMovieFailure({ error }));
      })
    )
  );
}
