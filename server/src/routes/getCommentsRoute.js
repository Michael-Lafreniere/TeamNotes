const express = require('express');
const commentSchema = require('../models/commentSchema');

const router = express.Router();

router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const comments = await commentSchema.find({ noteID: req.body.noteID });
    // console.table(comments);
    res.status(200).json(comments);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
