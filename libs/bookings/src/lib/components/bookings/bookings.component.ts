import { Component } from '@angular/core';
import { BookingsFacade } from '../../+state/bookings.facade';

@Component({
  selector: 'org-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent {

  bookings$ = this.bookingsFacade.allBookings$;


  constructor(public bookingsFacade: BookingsFacade) {
    this.bookingsFacade.init();
  }
}
