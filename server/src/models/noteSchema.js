const mongoose = require('mongoose');
const schema = mongoose.Schema;

const noteSchema = new schema({
  userID: {
    type: schema.ObjectId,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  commentId: [
    {
      type: schema.ObjectId,
      ref: 'Comment'
    }
  ],
  created_date: {
    type: Date,
    default: Date.now
  },
  modified_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('noteSchema', noteSchema, 'Notes');
