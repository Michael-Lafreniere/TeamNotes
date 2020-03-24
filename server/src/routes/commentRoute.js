const express = require('express');
const noteSchema = require('../models/noteSchema');
const commentSchema = require('../models/commentSchema');

const router = express.Router();

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
