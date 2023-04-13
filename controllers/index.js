const router = require('express').Router();
const { Employer, JobSeeker, Post } = require('../models');
const jobSeekerRouter = require('./jobSeeker');
const employerRouter = require('./employer');

router.use('/jobSeeker', jobSeekerRouter);
router.use('/employer', employerRouter);

// Routes go here

router.get('/', async function(req, res) {
  try {
    const posts = await Post.findAll();
    res.render('homepage', {
      loggedIn: req.session.loggedIn,
      posts
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
