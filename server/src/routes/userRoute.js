const express = require('express');
const userSchema = require('../models/userSchema');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const userDetails = await userSchema.find({ _id: req.body.value });
    res.status(200).json(userDetails[0].name);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
