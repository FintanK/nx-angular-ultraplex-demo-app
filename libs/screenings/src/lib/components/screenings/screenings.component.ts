import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScreeningsFacade } from '../../+state/screenings.facade';

@Component({
  selector: 'org-screenings',
  templateUrl: './screenings.component.html',
  styleUrls: ['./screenings.component.scss'],
})
export class ScreeningsComponent {
  public id: string | null = null;

  allScreenings$ = this.screeningsFacade.allScreenings$;

  constructor(
    public screeningsFacade: ScreeningsFacade,
    public activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.screeningsFacade.init(this.id);
    }
  }
}
