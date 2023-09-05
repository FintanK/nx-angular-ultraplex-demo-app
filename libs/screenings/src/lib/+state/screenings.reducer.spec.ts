import { Action } from '@ngrx/store';

import * as ScreeningsActions from './screenings.actions';
import { ScreeningsEntity } from './screenings.models';
import {
  ScreeningsState,
  initialScreeningsState,
  screeningsReducer,
} from './screenings.reducer';

describe('Screenings Reducer', () => {
  const createScreeningsEntity = (id: string, name = ''): ScreeningsEntity => ({
    id,
    cinemaName: name || `name-${id}`,
    screenName: 'screenName',
    start: new Date(),
    movie: {
      id: '1',
      name: 'name',
      runtime: 1,
    },
  });

  describe('valid Screenings actions', () => {
    it('loadScreeningsSuccess should return the list of known Screenings', () => {
      const screenings = [
        createScreeningsEntity('PRODUCT-AAA'),
        createScreeningsEntity('PRODUCT-zzz'),
      ];
      const action = ScreeningsActions.loadScreeningsSuccess({ screenings });

      const result: ScreeningsState = screeningsReducer(
        initialScreeningsState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = screeningsReducer(initialScreeningsState, action);

      expect(result).toBe(initialScreeningsState);
    });
  });
});
