import { combineReducers } from 'redux';
import auth from './auth';
import posts from './posts';

export default function getRootReducer() {
  return combineReducers({
    auth,
    posts
  });
}
