import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromMovies from './+state/movies.reducer';
import { MoviesEffects } from './+state/movies.effects';
import { MoviesFacade } from './+state/movies.facade';
import { MoviesComponent } from './components/movies/movies.component';

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
  declarations: [MoviesComponent],
  exports: [MoviesComponent],
})
export class MoviesModule {}
