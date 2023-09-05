import { Action } from '@ngrx/store';

import * as CinemasActions from './cinemas.actions';
import { CinemasEntity } from './cinemas.models';
import {
  CinemasState,
  initialCinemasState,
  cinemasReducer,
} from './cinemas.reducer';

describe('Cinemas Reducer', () => {
  const createCinemasEntity = (id: string, name = ''): CinemasEntity => ({
    id,
    name: name || `name-${id}`,
    screens: [],
  });

  describe('valid Cinemas actions', () => {
    it('loadCinemasSuccess should return the list of known Cinemas', () => {
      const cinemas = [
        createCinemasEntity('PRODUCT-AAA'),
        createCinemasEntity('PRODUCT-zzz'),
      ];
      const action = CinemasActions.loadCinemasSuccess({ cinemas });

      const result: CinemasState = cinemasReducer(initialCinemasState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = cinemasReducer(initialCinemasState, action);

      expect(result).toBe(initialCinemasState);
    });
  });
});
