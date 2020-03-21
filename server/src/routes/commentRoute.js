const express = require('express');
const noteSchema = require('../models/noteSchema');
const commentSchema = require('../models/commentSchema');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const comments = await commentSchema.find({ noteID: req.body.noteID });
    res.status(200).json(comments);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post('/', async (req, res) => {
  const noteID = req.body.noteID;

  noteSchema.findById(noteID, async (error, note) => {
    if (error) return res.send(error);

    const comment = new commentSchema({
      comment: req.body.comment,
      userID: req.body.userID,
      noteID: req.body.noteID
    });

    const savedComment = await comment.save({ j: true, upsert: true });
    note.commentId.push(savedComment);
    await note.save();
  });

  res.status(200).json('successful');
});

module.exports = router;
