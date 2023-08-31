import * as MoviesActions from './lib/+state/movies.actions';

import * as MoviesFeature from './lib/+state/movies.reducer';

import * as MoviesSelectors from './lib/+state/movies.selectors';

export * from './lib/+state/movies.facade';

export * from './lib/+state/movies.models';

export { MoviesActions, MoviesFeature, MoviesSelectors };
export * from './lib/movies.module';
