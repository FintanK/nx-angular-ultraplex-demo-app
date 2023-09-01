import { Component, OnInit } from '@angular/core';
import { BookingsFacade } from '@org/bookings';
import { CinemasFacade } from '@org/cinemas';
import { MoviesFacade } from '@org/movies';

@Component({
  selector: 'org-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  allCinemas$ = this.cinemasFacade.allCinemas$;
  allMovies$ = this.moviesFacade.allMovies$;
  allBookings$ = this.bookingsFacade.allBookings$;

  numScreens = 0;

  constructor(
    public cinemasFacade: CinemasFacade,
    public bookingsFacade: BookingsFacade,
    public moviesFacade: MoviesFacade
  ) {
    this.cinemasFacade.init();
    this.bookingsFacade.init();
    this.moviesFacade.init();
  }

  ngOnInit(): void {
    this.allCinemas$.subscribe((cinemas) => {
      cinemas.forEach((cinema) => {
        this.numScreens += cinema.screens.length;
      });
    });
  }
}
