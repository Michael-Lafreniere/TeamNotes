const mongoose = require('mongoose');

const schema = mongoose.Schema;

const commentSchema = new schema({
  comment: {
    type: String,
    required: true
  },
  userID: {
    type: schema.ObjectId,
    ref: 'Users',
    required: true
  },
  noteID: {
    type: schema.ObjectId,
    ref: 'Notes',
    required: true
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  modified_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('commentSchema', commentSchema, 'Comments');
