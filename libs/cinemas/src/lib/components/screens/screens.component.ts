import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CinemasFacade } from '../../+state/cinemas.facade';
import { ScreenEntity } from '../../+state/cinemas.models';

@Component({
  selector: 'org-screens',
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.scss'],
})
export class ScreensComponent implements OnInit {
  public id: string | null = null;
  public screens: ScreenEntity[] = [];
  public newScreenName!: string;

  constructor(
    public route: ActivatedRoute,
    public cinemaFacade: CinemasFacade
  ) {
    this.cinemaFacade.init();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');

      this.cinemaFacade.allCinemas$.subscribe((cinemas) => {
        if (this.id && this.id !== null) {
          this.screens =
            cinemas.find((cinema) => cinema.id.toString() === this.id)
              ?.screens || [];
        }
      });
    });
  }

  addNewScreen() {
    if (this.id && this.id !== null) {
      this.cinemaFacade.addNewScreen(this.newScreenName, parseInt(this.id));
    }
  }
}
