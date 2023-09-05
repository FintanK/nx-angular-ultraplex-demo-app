import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '@org/material';
import { ScreeningsEffects } from './+state/screenings.effects';
import { ScreeningsFacade } from './+state/screenings.facade';
import * as fromScreenings from './+state/screenings.reducer';
import { ScreeningsComponent } from './components/screenings/screenings.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromScreenings.SCREENINGS_FEATURE_KEY,
      fromScreenings.screeningsReducer
    ),
    EffectsModule.forFeature([ScreeningsEffects]),
    StoreModule.forFeature(
      fromScreenings.SCREENINGS_FEATURE_KEY,
      fromScreenings.screeningsReducer
    ),
    MaterialModule,
  ],
  declarations: [ScreeningsComponent],
  exports: [ScreeningsComponent],
  providers: [ScreeningsFacade],
})
export class ScreeningsModule {}
