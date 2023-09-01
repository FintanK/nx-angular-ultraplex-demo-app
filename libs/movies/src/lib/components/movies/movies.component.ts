import { Component } from '@angular/core';
import { MoviesFacade } from '../../+state/movies.facade';

@Component({
  selector: 'org-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  movies$ = this.moviesFacade.allMovies$;

  newMovieName!: string;

  constructor(public moviesFacade: MoviesFacade) {
    this.moviesFacade.init();
  }

  addNewMovie() {
    this.moviesFacade.addNewMovie(this.newMovieName);
  }
}
