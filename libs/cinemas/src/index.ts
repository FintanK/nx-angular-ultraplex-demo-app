import * as CinemasActions from './lib/+state/cinemas.actions';

import * as CinemasFeature from './lib/+state/cinemas.reducer';

import * as CinemasSelectors from './lib/+state/cinemas.selectors';

export * from './lib/+state/cinemas.facade';

export * from './lib/+state/cinemas.models';

export { CinemasActions, CinemasFeature, CinemasSelectors };
export * from './lib/cinemas.module';
