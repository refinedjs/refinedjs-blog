// posts-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const posts = new Schema({
    id: { type: String, required: true },
    postStatus: { type: String, required: true },
    postTitle: { type: String, required: true },
    postAuthor: { type: String, required: true },
    postDate: { type: String, required: true },
    postTags: { type: String, required: true },
    postSnippet: { type: String, required: true },
    postBody: { type: String, required: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('posts', posts);
};
