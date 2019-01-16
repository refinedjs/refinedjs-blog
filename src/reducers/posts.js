import * as types from '../actions/postsTypes';

const initialState = {
  blogPosts: []
};

const posts = (state = initialState, action) => {
  switch(action.type) { //eslint-disable-line
    case types.SET_POSTS:
      return {
        ...state,
        blogPosts: action.posts
      };
    case types.SAVE_POST:
      return {
        ...state,
        blogPosts: Object.assign([], state.posts).unshift(action.post)
      };
    default:
      return state;
  }
};

export default posts;