const express = require('express');
const noteSchema = require('../models/noteSchema');
const commentSchema = require('../models/commentSchema');

const router = express.Router();

router.post('/', async (req, res) => {
  const noteID = req.body.noteID;
  const note = noteSchema.findById(noteID);

  if (note) {
    const comment = new commentSchema({
      comment: req.body.comment,
      userID: req.body.userID,
      noteID: req.body.noteID
    });
    try {
      const savedComment = await comment.save();
      res.status(200).json(savedComment);
      return;
    } catch (error) {
      console.log('Error saving comment:', error);
      res.status(400).json(error);
      return;
    }
  }
  res.status(200).json('invalid note');
});

module.exports = router;

// const result = await noteSchema.findByIdAndUpdate(
//   noteID,
//   {
//     $push: {
//       comments: { userID: req.body.userID, comment: req.body.comment }
//     }
//   },
//   { safe: true, upsert: true }
// );

// exports.postPosts = function(req,res){
//   var post = new Post({
//       title: req.body.title,
//       content: req.body.content,
//       user: req.user._id
//   });
//   post.save(function(err){
//       if(err){res.send(err);}
//       res.json({status:'done'});
//   });
// };

// // api/posts/:postId/comments
// exports.postComment = function(req,res){
//   var comment = new Comment({
//       content: req.body.content,
//       post: req.params.postId,
//       user: req.user._id
//   });
//   comment.save(function(err){
//       if(err){res.send(err);}
//       res.json({status:'done'});
//   });
// };
