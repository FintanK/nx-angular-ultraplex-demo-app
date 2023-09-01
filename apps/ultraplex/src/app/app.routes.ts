import { Route } from '@angular/router';
import { BookingsComponent } from '@org/bookings';
import { CinemasComponent, ScreensComponent } from '@org/cinemas';
import { MoviesComponent } from '@org/movies';
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
    path: 'cinemas/:id/screens',
    component: ScreensComponent,
  },
  {
    path: 'bookings',
    component: BookingsComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'movies/:id',
    component: MoviesComponent,
  },
];
