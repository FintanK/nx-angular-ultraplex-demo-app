import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BookingsEffects } from './+state/bookings.effects';
import { BookingsFacade } from './+state/bookings.facade';
import * as fromBookings from './+state/bookings.reducer';
import { BookingsComponent } from './components/bookings/bookings.component';
import { MaterialModule } from '@org/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    StoreModule.forFeature(
      fromBookings.BOOKINGS_FEATURE_KEY,
      fromBookings.bookingsReducer
    ),
    EffectsModule.forFeature([BookingsEffects]),
  ],
  providers: [BookingsFacade],
  declarations: [BookingsComponent],
  exports: [BookingsComponent],
})
export class BookingsModule {}
