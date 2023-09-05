import { Injectable, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as CinemasActions from './cinemas.actions';
import * as CinemasSelectors from './cinemas.selectors';

@Injectable()
export class CinemasFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(CinemasSelectors.selectCinemasLoaded));
  allCinemas$ = this.store.pipe(select(CinemasSelectors.selectAllCinemas));
  selectedCinemas$ = this.store.pipe(select(CinemasSelectors.selectEntity));

  init() {
    this.store.dispatch(CinemasActions.initCinemas());
  }

  loadCinemaScreenings(cinemaId: number) {
    this.store.dispatch(
      CinemasActions.loadCinemaScreenings({
        cinemaId,
      })
    );
  }

  addNewCinema(newCinemaName: string) {
    this.store.dispatch(
      CinemasActions.addNewCinema({
        cinemaName: newCinemaName,
      })
    );
  }

  addNewScreen(newScreenName: string, cinemaId: number) {
    this.store.dispatch(
      CinemasActions.addNewScreen({
        screenName: newScreenName,
        cinemaId,
      })
    );
  }
}
