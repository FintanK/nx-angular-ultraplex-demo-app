import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromMovies from './+state/movies.reducer';
import { MoviesEffects } from './+state/movies.effects';
import { MoviesFacade } from './+state/movies.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromMovies.MOVIES_FEATURE_KEY,
      fromMovies.moviesReducer
    ),
    EffectsModule.forFeature([MoviesEffects]),
  ],
  providers: [MoviesFacade],
})
export class MoviesModule {}
