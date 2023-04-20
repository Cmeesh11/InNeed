const withEmployerAuth = require('../utils/employerAuth');
const employerRouter = require('express').Router();
const { Employer, Post } = require('../models');
const { findAll } = require('../models/Post');

// Renders a form for the employer to fill out
employerRouter.get('/post', withEmployerAuth, async (req, res) => {
  try {
    res.render('jobpost', {
      logged_in: req.session.logged_in,
      employer: req.session.employer
    });
  } catch (err) {
    res.status(404).json(err);
  }
});

employerRouter.get('/confirm', withEmployerAuth, (req, res) => {
  try {
    res.render('jobpostConfirmation', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(404).json(err);
  }
});

employerRouter.get('/dashboard', withEmployerAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        employer_id: req.session.employer_id
      }
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('employerDashboard', {
      logged_in: req.session.logged_in,
      employer: req.session.employer,
      posts
    });
  } catch (err) {
    res.status(404).json(err);
  }
});
module.exports = employerRouter;
