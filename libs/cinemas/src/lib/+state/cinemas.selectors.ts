import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CINEMAS_FEATURE_KEY,
  CinemasState,
  cinemasAdapter,
} from './cinemas.reducer';

// Lookup the 'Cinemas' feature state managed by NgRx
export const selectCinemasState =
  createFeatureSelector<CinemasState>(CINEMAS_FEATURE_KEY);

const { selectAll, selectEntities } = cinemasAdapter.getSelectors();

export const selectCinemasLoaded = createSelector(
  selectCinemasState,
  (state: CinemasState) => state.loaded
);

export const selectCinemasError = createSelector(
  selectCinemasState,
  (state: CinemasState) => state.error
);

export const selectAllCinemas = createSelector(
  selectCinemasState,
  (state: CinemasState) => selectAll(state)
);

export const selectCinemasEntities = createSelector(
  selectCinemasState,
  (state: CinemasState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectCinemasState,
  (state: CinemasState) => state.selectedId
);

export const selectEntity = createSelector(
  selectCinemasEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
