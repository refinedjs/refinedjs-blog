import * as auth from './auth';
import * as posts from './posts';

export const ActionCreators = Object.assign({}, // eslint-disable-line
  auth,
  posts
);