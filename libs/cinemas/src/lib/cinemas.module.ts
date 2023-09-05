import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '@org/material';
import { CinemasEffects } from './+state/cinemas.effects';
import { CinemasFacade } from './+state/cinemas.facade';
import * as fromCinemas from './+state/cinemas.reducer';
import { CinemasComponent } from './components/cinemas/cinemas.component';
import { ScreensComponent } from './components/screens/screens.component';
import { CinemasService } from './services/cinemas.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature(
      fromCinemas.CINEMAS_FEATURE_KEY,
      fromCinemas.cinemasReducer
    ),
    EffectsModule.forFeature([CinemasEffects]),
    MaterialModule,
  ],
  providers: [CinemasFacade, CinemasService],
  declarations: [CinemasComponent, ScreensComponent],
  exports: [CinemasComponent, ScreensComponent],
})
export class CinemasModule {}
