const mongoose = require('mongoose')

const communitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  communityType: { type: String, required: true },
  topics: [
    {
      topicId: { type: String, required: true },
      name: { type: String, required: true },
    },
  ],
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
})

const Community = mongoose.model('Community', communitySchema)
