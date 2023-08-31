import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCinemas from './+state/cinemas.reducer';
import { CinemasEffects } from './+state/cinemas.effects';
import { CinemasFacade } from './+state/cinemas.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromCinemas.CINEMAS_FEATURE_KEY,
      fromCinemas.cinemasReducer
    ),
    EffectsModule.forFeature([CinemasEffects]),
  ],
  providers: [CinemasFacade],
})
export class CinemasModule {}