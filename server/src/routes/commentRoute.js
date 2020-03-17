const express = require('express');
const noteSchema = require('../models/noteSchema');

const router = express.Router();

router.post('/', async (req, res) => {
  // TODO: Check for properly formed message, otherwise reject it.

  try {
    const noteID = req.body.noteID;
    const result = await noteSchema.findByIdAndUpdate(
      noteID,
      {
        $push: {
          comments: { userID: req.body.userID, comment: req.body.comment }
        }
      },
      { safe: true, upsert: true }
    );

    res.status(200).json(result.nModified);
  } catch (error) {
    console.log('error:', error);
    res.status(400).json({ message: error });
  }
});

module.exports = router;
