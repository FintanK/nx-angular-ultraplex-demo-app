import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromBookings from './+state/bookings.reducer';
import { BookingsEffects } from './+state/bookings.effects';
import { BookingsFacade } from './+state/bookings.facade';
import { BookingsComponent } from './components/bookings/bookings.component';

@NgModule({
  imports: [
    CommonModule,
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
