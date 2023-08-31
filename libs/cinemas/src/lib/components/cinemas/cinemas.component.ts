import { Component } from '@angular/core';
import { CinemasFacade } from '../../+state/cinemas.facade';

@Component({
  selector: 'org-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.css'],
})
export class CinemasComponent {
  constructor(public cinemasFacade: CinemasFacade) {
    this.cinemasFacade.init();
  }
}
