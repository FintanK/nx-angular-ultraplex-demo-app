import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromMovies from './+state/movies.reducer';
import { MoviesEffects } from './+state/movies.effects';
import { MoviesFacade } from './+state/movies.facade';
import { MoviesComponent } from './components/movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './components/movie/movie.component';
import { MaterialModule } from '@org/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    StoreModule.forFeature(
      fromMovies.MOVIES_FEATURE_KEY,
      fromMovies.moviesReducer
    ),
    EffectsModule.forFeature([MoviesEffects]),
  ],
  providers: [MoviesFacade],
  declarations: [MoviesComponent, MovieComponent],
  exports: [MoviesComponent, MovieComponent],
})
export class MoviesModule {}
