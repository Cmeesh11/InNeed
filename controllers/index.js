const router = require('express').Router();
const { Employer, Post } = require('../models');
const jobSeekerRouter = require('./jobSeekerRoutes');
const employerRouter = require('./employerRoutes');
const apiRouter = require('./api/index');

router.use('/jobSeeker', jobSeekerRouter);
router.use('/employer', employerRouter);
router.use('/api', apiRouter);

// Router: Get all Posts
router.get('/', async function (req, res) {
  try {
    const postsData = await Post.findAll({
      include: [
        {
          model: Employer
        }
      ]
    }
    );

    const posts = postsData.map((post) => post.get({ plain: true }));
    res.render('homepage', {
      logged_in: req.session.logged_in,
      employer: req.session.employer,
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

router.get('/signup', async (req, res) => {
  try {
    res.render('signup');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
