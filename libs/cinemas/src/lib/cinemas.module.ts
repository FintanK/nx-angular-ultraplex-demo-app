import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCinemas from './+state/cinemas.reducer';
import { CinemasEffects } from './+state/cinemas.effects';
import { CinemasFacade } from './+state/cinemas.facade';
import { CinemasComponent } from './components/cinemas/cinemas.component';
import { CinemasService } from './services/cinemas.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromCinemas.CINEMAS_FEATURE_KEY,
      fromCinemas.cinemasReducer
    ),
    EffectsModule.forFeature([CinemasEffects]),
  ],
  providers: [CinemasFacade, CinemasService],
  declarations: [CinemasComponent],
  exports: [CinemasComponent],
})
export class CinemasModule {}
