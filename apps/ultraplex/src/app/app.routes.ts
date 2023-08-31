import { Route } from '@angular/router';
import { BookingsComponent } from 'libs/bookings/src/lib/components/bookings/bookings.component';
import { CinemasComponent } from 'libs/cinemas/src/lib/components/cinemas/cinemas.component';
import { MoviesComponent } from 'libs/movies/src/lib/components/movies/movies.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'cinemas',
    component: CinemasComponent,
  },
  {
    path: 'bookings',
    component: BookingsComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
];
