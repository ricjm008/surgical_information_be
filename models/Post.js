const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  featuredImage: {
    type: String,
  },
  summary: {
    type: String,
  },
  mainContent: {
    type: String,
  },
});

const Post = mongoose.model('User', postSchema);

module.exports = Post;
