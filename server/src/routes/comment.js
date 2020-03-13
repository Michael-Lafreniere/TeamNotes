const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    console.log(res.body);
    res.status(200).json(res.body);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
