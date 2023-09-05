import { ScreeningsEntity } from './screenings.models';
import {
  ScreeningsPartialState,
  initialScreeningsState,
  screeningsAdapter,
} from './screenings.reducer';
import * as ScreeningsSelectors from './screenings.selectors';

describe('Screenings Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getScreeningsId = (it: ScreeningsEntity) => it.id;
  const createScreeningsEntity = (id: string, name = '') =>
    ({
      id,
      cinemaName: name || `name-${id}`,
      screenName: 'screenName',
      runtime: 1,
      start: new Date(),
      movie: {
        id: '1',
        name: 'name',
        runtime: 1,
      },
    } as ScreeningsEntity);

  let state: ScreeningsPartialState;

  beforeEach(() => {
    state = {
      screenings: screeningsAdapter.setAll(
        [
          createScreeningsEntity('PRODUCT-AAA'),
          createScreeningsEntity('PRODUCT-BBB'),
          createScreeningsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialScreeningsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Screenings Selectors', () => {
    it('selectAllScreenings() should return the list of Screenings', () => {
      const results = ScreeningsSelectors.selectAllScreenings(state);
      const selId = getScreeningsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = ScreeningsSelectors.selectEntity(
        state
      ) as ScreeningsEntity;
      const selId = getScreeningsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectScreeningsLoaded() should return the current "loaded" status', () => {
      const result = ScreeningsSelectors.selectScreeningsLoaded(state);

      expect(result).toBe(true);
    });

    it('selectScreeningsError() should return the current "error" state', () => {
      const result = ScreeningsSelectors.selectScreeningsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
