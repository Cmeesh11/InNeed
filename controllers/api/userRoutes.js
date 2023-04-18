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
    req.session.jobSeeker = true;
    req.session.id = jobSeeker.id;
    req.session.save();
  } catch (err) {
    res.status(500).json(err);
  }
});

userRouter.post('/jobSeekerlogin', async (req, res) => {
  try {
    const jobSeeker = await JobSeeker.findOne({
      where: {
        email: req.body.email
      }
    });
    if (!jobSeeker) {
      res.status(400).json({ message: 'Incorrect email or password' });
    }
    if (jobSeeker.checkPassword(req.body.password)) {
      req.session.logged_in = true;
      req.session.jobSeeker = true;
      req.session.id = jobSeeker.id;
      req.session.save();
      res.status(200).json({ message: 'Successfully logged in!' });
    } else {
      res.status(400).json({ message: 'Incorrect email or password' });
    }
  } catch (err) {
    res.status(404).json(err);
  }
});

userRouter.post('/employerLogin', async (req, res) => {
  try {
    const employer = await Employer.findOne({
      where: {
        email: req.body.email
      }
    });
    if (!employer) {
      res.status(400).json({ message: 'Incorrect email or password' });
    }
    if (employer.checkPassword(req.body.password)) {
      req.session.logged_in = true;
      req.session.employer = true;
      req.session.id = jobSeeker.id;
      req.session.save();
      res.status(200).json({ message: 'Successfully logged in!' });
    } else {
      res.status(400).json({ message: 'Incorrect email or password' });
    }
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = userRouter;
