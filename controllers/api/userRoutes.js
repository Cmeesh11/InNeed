const userRouter = require('express').Router();
const JobSeeker = require('../../models/JobSeeker');
const { Employer } = require('../../models');

// Router: Create Employer Signup
userRouter.post('/signupEmployer', async (req, res) => {
  try {
    const employer = await Employer.create(req.body);
    req.session.logged_in = true;
    req.session.employer = true;
    req.session.id = employer.id;
    req.session.save();
  } catch (err) {
    res.status(500).json(err);
  }
});

// Router: Create Job Seeker Signup
userRouter.post('/signupJobseeker', async (req, res) => {
  try {
    const jobSeeker = await JobSeeker.create(req.body);
    req.session.logged_in = true;
    req.session.JobSeeker = true;
    req.session.id = jobSeeker.id;
    req.session.save();
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = userRouter;
