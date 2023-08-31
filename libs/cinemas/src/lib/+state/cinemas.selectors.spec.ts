import { CinemasEntity } from './cinemas.models';
import {
  cinemasAdapter,
  CinemasPartialState,
  initialCinemasState,
} from './cinemas.reducer';
import * as CinemasSelectors from './cinemas.selectors';

describe('Cinemas Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCinemasId = (it: CinemasEntity) => it.id;
  const createCinemasEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as CinemasEntity);

  let state: CinemasPartialState;

  beforeEach(() => {
    state = {
      cinemas: cinemasAdapter.setAll(
        [
          createCinemasEntity('PRODUCT-AAA'),
          createCinemasEntity('PRODUCT-BBB'),
          createCinemasEntity('PRODUCT-CCC'),
        ],
        {
          ...initialCinemasState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Cinemas Selectors', () => {
    it('selectAllCinemas() should return the list of Cinemas', () => {
      const results = CinemasSelectors.selectAllCinemas(state);
      const selId = getCinemasId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = CinemasSelectors.selectEntity(state) as CinemasEntity;
      const selId = getCinemasId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectCinemasLoaded() should return the current "loaded" status', () => {
      const result = CinemasSelectors.selectCinemasLoaded(state);

      expect(result).toBe(true);
    });

    it('selectCinemasError() should return the current "error" state', () => {
      const result = CinemasSelectors.selectCinemasError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
