import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as BookingsActions from './bookings.actions';
import { BookingsEffects } from './bookings.effects';

describe('BookingsEffects', () => {
  let actions: Observable<Action>;
  let effects: BookingsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        BookingsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(BookingsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: BookingsActions.initBookings() });

      const expected = hot('-a-|', {
        a: BookingsActions.loadBookingsSuccess({ bookings: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
