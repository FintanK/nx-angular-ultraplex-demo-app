import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as CinemasActions from './cinemas.actions';
import { CinemasEffects } from './cinemas.effects';

describe('CinemasEffects', () => {
  let actions: Observable<Action>;
  let effects: CinemasEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        CinemasEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(CinemasEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: CinemasActions.initCinemas() });

      const expected = hot('-a-|', {
        a: CinemasActions.loadCinemasSuccess({ cinemas: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
