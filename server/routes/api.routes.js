const postsService = require('../services/posts.service');
const createModel = require('../models/posts.model');

function setApiRoutes(app) {
  const Model = createModel(app);
  const options = {
    name: 'posts',
    Model
  };

  app.route('/api/posts').get(postsService(options, app).getPosts);
  app.route('/api/posts').post(postsService(options, app).savePosts);
  app.route('/api/posts').delete(postsService(options, app).deletePosts);

  app.route('/api/posts/:id').get(postsService(options, app).getPost);
  app.route('/api/posts/:id').put(postsService(options, app).updatePost);
  app.route('/api/posts/:id').delete(postsService(options, app).deletePost);
}

module.exports = setApiRoutes;