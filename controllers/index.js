const router = require('express').Router();
const { Employer, JobSeeker, Post } = require('../models');
const jobSeekerRouter = require('./jobSeekerRoutes');
const employerRouter = require('./employerRoutes');
const apiRouter = require('./api/index');

router.use('/jobSeeker', jobSeekerRouter);
router.use('/employer', employerRouter);
router.use('/api', apiRouter);

// Router: Get all Posts
router.get('/', async function (req, res) {
  try {
    const posts = await Post.findAll();
    res.render('homepage', {
      loggedIn: req.session.logged_In,
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

// Router: Destroy session
router.get('/logout', (req, res) => {
  try {
    req.session.destroy();
    res.redirect('/login');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Router: Create Employer Signup
router.post('/signupEmployer', async (req, res) => {
  try {
    const employer = await Employer.create(req.body);
    req.session.logged_in = true;
    req.session.id = employer.id;
  } catch (err) {
    res.status(500).json(err);
  }
});

// Router: Create Job Seeker Signup
router.post('/signupJobseeker', async (req, res) => {
  try {
    const jobSeeker = await JobSeeker.create(req.body);
    req.session.logged_in = true;
    req.session.id = jobSeeker.id;
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
