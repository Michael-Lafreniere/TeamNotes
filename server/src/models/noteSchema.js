const mongoose = require('mongoose');
const schema = mongoose.Schema;

const noteSchema = new schema({
  userID: {
    type: Number,
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
