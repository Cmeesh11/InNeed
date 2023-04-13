const router = require('express').Router();
const { Employer, JobSeeker, Post } = require('../models');
const jobSeekerRouter = require('./jobSeekerRoutes');
const employerRouter = require('./employerRoutes');
const apiRouter = require('./api/index');

router.use('/jobSeeker', jobSeekerRouter);
router.use('/employer', employerRouter);
router.use('/api', apiRouter);
// Routes go here
router.get('/', async function (req, res) {
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

// Route: Destroy session
router.get('/logout', (req, res) => {
  try {
    req.session.destroy();
    res.redirect('/login');
  } catch (err) {
    res.status(500).json(err);
  }
});
