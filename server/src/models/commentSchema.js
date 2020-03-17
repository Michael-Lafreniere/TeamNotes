const mongoose = require('mongoose');
// const noteSchema = require('../models/noteSchema');

const schema = mongoose.Schema;

const commentSchema = new schema({
  comment: {
    type: String,
    required: true
  },
  user: {
    type: schema.ObjectId,
    required: true
  },
  note: {
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

module.exports = mongoose.model('commentSchema', commentSchema, 'Comment');
