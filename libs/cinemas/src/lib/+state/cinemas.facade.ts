import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as CinemasActions from './cinemas.actions';
import * as CinemasFeature from './cinemas.reducer';
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

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(CinemasActions.initCinemas());
  }
}
