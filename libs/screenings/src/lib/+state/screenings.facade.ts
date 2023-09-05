import { Injectable, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as ScreeningsActions from './screenings.actions';
import * as ScreeningsSelectors from './screenings.selectors';

@Injectable()
export class ScreeningsFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(ScreeningsSelectors.selectScreeningsLoaded));
  allScreenings$ = this.store.pipe(
    select(ScreeningsSelectors.selectAllScreenings)
  );
  selectedScreenings$ = this.store.pipe(
    select(ScreeningsSelectors.selectEntity)
  );

  init(cinemaId: string) {
    this.store.dispatch(ScreeningsActions.initScreenings({ cinemaId }));
  }
}
