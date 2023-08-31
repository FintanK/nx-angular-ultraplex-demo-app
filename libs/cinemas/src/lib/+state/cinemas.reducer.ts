import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as CinemasActions from './cinemas.actions';
import { CinemasEntity } from './cinemas.models';

export const CINEMAS_FEATURE_KEY = 'cinemas';

export interface CinemasState extends EntityState<CinemasEntity> {
  selectedId?: string | number; // which Cinemas record has been selected
  loaded: boolean; // has the Cinemas list been loaded
  error?: string | null; // last known error (if any)
}

export interface CinemasPartialState {
  readonly [CINEMAS_FEATURE_KEY]: CinemasState;
}

export const cinemasAdapter: EntityAdapter<CinemasEntity> =
  createEntityAdapter<CinemasEntity>();

export const initialCinemasState: CinemasState = cinemasAdapter.getInitialState(
  {
    // set initial required properties
    loaded: false,
  }
);

const reducer = createReducer(
  initialCinemasState,
  on(CinemasActions.initCinemas, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(CinemasActions.loadCinemasSuccess, (state, { cinemas }) =>
    cinemasAdapter.setAll(cinemas, { ...state, loaded: true })
  ),
  on(CinemasActions.loadCinemasFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function cinemasReducer(
  state: CinemasState | undefined,
  action: Action
) {
  return reducer(state, action);
}
