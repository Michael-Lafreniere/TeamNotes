const express = require('express');
const commentSchema = require('../models/commentSchema');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const comments = await commentSchema.find({ noteID: req.body.noteID });
    // .populate('Users')
    // .exec((error, doc) => {
    //   console.log('doc:', doc);
    //   if (error) console.log('error:', error);
    // });
    // ).populate({
    //   $lookup: {
    //     from: 'Users',
    //     localField: userID,
    //     foreignField: _id
    //   }
    // });
    // console.table(comments);
    res.status(200).json(comments);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
