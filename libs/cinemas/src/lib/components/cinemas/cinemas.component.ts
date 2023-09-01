import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CinemasFacade } from '../../+state/cinemas.facade';

@Component({
  selector: 'org-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CinemasComponent {

  newCinemaName!: string;

  cinemas$ = this.cinemasFacade.allCinemas$;

  constructor(public cinemasFacade: CinemasFacade) {
    this.cinemasFacade.init();
  }

  addNewCinema() {
    this.cinemasFacade.addNewCinema(this.newCinemaName);
  }
}
