const router = require('express').Router();
const { Comment } = require('../models');
const withAuth = require('../utils/auth');

// Route to add a comment
router.post('/', withAuth, async (req, res) => {
  try {
    if (!req.body.comment_text || !req.body.post_id || !req.session.user_id) {
      throw new Error('Missing required fields');
    }
    const newComment = await Comment.create({
      comment_text: req.body.comment_text,
      post_id: req.body.post_id,
      user_id: req.session.user_id, // Only logged-in users have session.user_id
    });

    res.status(200).json(newComment);
  } catch (err) {
    console.error("Failed to add comment:", err); // Added more specific logging
    res.status(500).json(err);
  }
});

module.exports = router;