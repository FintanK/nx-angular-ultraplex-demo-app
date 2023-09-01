import { Component } from '@angular/core';
import { MoviesFacade } from '../../+state/movies.facade';

@Component({
  selector: 'org-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  movies$ = this.moviesFacade.allMovies$;

  constructor(public moviesFacade: MoviesFacade) {
    this.moviesFacade.init();
  }
}
