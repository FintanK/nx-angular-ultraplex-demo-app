import * as MoviesActions from './lib/+state/movies.actions';

import * as MoviesFeature from './lib/+state/movies.reducer';

import * as MoviesSelectors from './lib/+state/movies.selectors';

export * from './lib/+state/movies.facade';

export * from './lib/+state/movies.models';

export { MovieComponent } from './lib/components/movie/movie.component';
export { MoviesComponent } from './lib/components/movies/movies.component';
export * from './lib/movies.module';
export { MoviesActions, MoviesFeature, MoviesSelectors };
