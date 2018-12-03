class PostsService {
  constructor(options, app) {
    this.app = app;
    this.Model = options.Model;
    this.getPosts = this.getPosts.bind(this);
    this.getPost = this.getPost.bind(this);
    this.savePosts = this.savePosts.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.deletePosts = this.deletePosts.bind(this);
  }

  getPosts(...args) {
    const { res } = args[0];
    const { req } = args[1];
    return new Promise((resolve, reject) => {
      this.Model.find().then((result) => {
        //console.log('The results: ', result);
        const posts = {
          posts: result
        };

        req.res.status(200).send(posts);

        resolve(posts);
      }).catch((err) => {
        console.log('The error: ', err);
        res.status(500).send({ message: 'Error retrieving posts', error: err });
        reject(err);
      });
    });
  }

  getPost(...args) {
    const { res } = args[0];
    const { req } = args[1];
    if(req.params.id) {
      return new Promise((resolve, reject) => {
        this.Model.find({ id: { $eq: req.params.id } }).then((result) => {
          const posts = {
            posts: result
          };

          res.status(200).send(posts);

          resolve(posts);
        }).catch((err) => {
          console.log('The error: ', err);
          res.status(500).send({ message: 'Error retrieving post', error: err });
          reject(err);
        });
      });
    }

    res.status(400).send({ message: 'Could not retrieve undefined post' });
    return false;
  }

  savePosts(...args) {
    const { res } = args[0];
    const { req } = args[1];

    const newPostDetails = req.body;
    return new Promise((resolve, reject) => {
      // Allows us to insert and keep moving past the ones that error
      this.Model.insertMany(newPostDetails, { ordered: false }).then((result) => {
        res.status(200).send(result);
        resolve(result);
      }).catch((err) => {
        res.status(500).send({ message: 'Error creating post', error: err });
        reject(err);
      });
    });
  }

  updatePost(...args) {
    const { res } = args[0];
    const { req } = args[1];

    if(req.params.id) {
      const postUpdateDetails = req.body;

      return new Promise((resolve, reject) => {
        this.Model.updateOne({ id: req.params.id }, postUpdateDetails, { runValidators: true }).then((result) => {
          res.status(200).send(result);
          resolve(result);
        }).catch((err) => {
          res.status(500).send({ message: 'Error updating post', error: err });
          reject(err);
        });
      });
    }

    res.status(400).send({ message: 'Could not update undefined post' });
    return false;
  }

  deletePost(...args) {
    const { res } = args[0];
    const { req } = args[1];

    if(req.params.id) {
      return new Promise((resolve, reject) => {
        this.Model.deleteOne({ id: req.params.id }).then((result) => {
          res.status(200).send(result);
          resolve(result);
        }).catch((err) => {
          res.status(500).send({ message: 'Error deleting post', error: err });
          reject(err);
        });
      });
    }

    res.status(400).send({ message: 'Could not delete undefined post' });
    return false;
  }

  deletePosts(...args) {
    const { res } = args[0];
    const { req } = args[1];

    if(req.query.ids) {
      return new Promise((resolve, reject) => {
        this.Model.remove({ id: { $in: req.query.ids } }).then((result) => {
          res.status(200).send(result);
          resolve(result);
        }).catch((err) => {
          res.status(500).send({ message: 'Error deleting posts', error: err });
          reject(err);
        });
      });
    }

    res.status(400).send({ message: 'Could not delete undefined posts' });
    return false;
  }
}

module.exports = function (options, app) {
  return new PostsService(options, app);
};

module.exports.PostsService = PostsService;