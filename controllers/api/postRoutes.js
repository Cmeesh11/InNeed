const postRouter = require('express').Router();
const Post = require('../../models/Post');
const withEmployerAuth = require('../../utils/employerAuth');

// Create Post
postRouter.post('/create', withEmployerAuth, async (req, res) => {
  try {
    const post = await Post.create({
      ...req.body,
      employer_id: req.session.employer_id
    });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = postRouter;
