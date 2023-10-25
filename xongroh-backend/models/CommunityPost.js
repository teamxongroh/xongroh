const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
  timestamp: { type: Date, default: Date.now },
  likes: {
    type: Map,
    of: Boolean,
  },
  parentId: { type: String, default: null }, // change to undefined if not working
})

const communityPostSchema = new mongoose.Schema({
  topicId: { type: mongoose.Schema.Types.ObjectId, ref: 'Community' },
  postType: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
  likes: {
    type: Map,
    of: Boolean,
  },
  comments: [commentSchema],
  timestamp: { type: Date, default: Date.now },
})

const CommunityPost = mongoose.model('CommunityPost', communityPostSchema)
