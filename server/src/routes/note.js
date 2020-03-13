const express = require('express');
const noteSchema = require('../models/noteSchema');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const notes = await noteSchema.find().limit(10);
    res.status(200).json(notes);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post('/', async (req, res) => {
  const note = new noteSchema({
    userID: req.body.userID,
    title: req.body.title,
    body: req.body.body
    // comments: req.body.comments
  });

  try {
    const savedNote = await note.save();
    res.status(200).json(savedNote);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
});

module.exports = router;
