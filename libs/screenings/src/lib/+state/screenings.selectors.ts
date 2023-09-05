import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  SCREENINGS_FEATURE_KEY,
  ScreeningsState,
  screeningsAdapter,
} from './screenings.reducer';

// Lookup the 'Screenings' feature state managed by NgRx
export const selectScreeningsState = createFeatureSelector<ScreeningsState>(
  SCREENINGS_FEATURE_KEY
);

const { selectAll, selectEntities } = screeningsAdapter.getSelectors();

export const selectScreeningsLoaded = createSelector(
  selectScreeningsState,
  (state: ScreeningsState) => state.loaded
);

export const selectScreeningsError = createSelector(
  selectScreeningsState,
  (state: ScreeningsState) => state.error
);

export const selectAllScreenings = createSelector(
  selectScreeningsState,
  (state: ScreeningsState) => selectAll(state)
);

export const selectScreeningsEntities = createSelector(
  selectScreeningsState,
  (state: ScreeningsState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectScreeningsState,
  (state: ScreeningsState) => state.selectedId
);

export const selectEntity = createSelector(
  selectScreeningsEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
