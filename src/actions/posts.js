import * as types from './postsTypes';

export function setPosts(posts) {
  return {
    type: types.SET_POSTS,
    posts
  };
}

export function savePost(post) {
  return {
    type: types.SAVE_POST,
    post
  };
}