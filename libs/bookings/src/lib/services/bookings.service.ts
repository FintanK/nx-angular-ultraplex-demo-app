import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookingsService {
  constructor(public http: HttpClient) {}

  getBookings() {
    return this.http.get(
      'https://develop.hybrid.iov99.com/ultraplex/api/v1/bookings?size=1000'
    );
  }

  addBooking(screeningId: string, seats: number) {
    return this.http.put(
      `https://develop.hybrid.iov99.com/ultraplex/api/v1/bookings`,
      {
        screeningId,
        seats,
      }
    );
  }
}
