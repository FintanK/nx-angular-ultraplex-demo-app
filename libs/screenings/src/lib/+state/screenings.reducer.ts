import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as ScreeningsActions from './screenings.actions';
import { ScreeningsEntity } from './screenings.models';

export const SCREENINGS_FEATURE_KEY = 'screenings';

export interface ScreeningsState extends EntityState<ScreeningsEntity> {
  selectedId?: string | number; // which Screenings record has been selected
  loaded: boolean; // has the Screenings list been loaded
  error?: string | null; // last known error (if any)
}

export interface ScreeningsPartialState {
  readonly [SCREENINGS_FEATURE_KEY]: ScreeningsState;
}

export const screeningsAdapter: EntityAdapter<ScreeningsEntity> =
  createEntityAdapter<ScreeningsEntity>();

export const initialScreeningsState: ScreeningsState =
  screeningsAdapter.getInitialState({
    // set initial required properties
    loaded: false,
  });

const reducer = createReducer(
  initialScreeningsState,
  on(ScreeningsActions.initScreenings, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ScreeningsActions.loadScreeningsSuccess, (state, { screenings }) =>
    screeningsAdapter.setAll(screenings, { ...state, loaded: true })
  ),
  on(ScreeningsActions.loadScreeningsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function screeningsReducer(
  state: ScreeningsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
