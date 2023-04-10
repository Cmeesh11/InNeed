const router = require('express').Router();

const jobSeekerRouter = require('./jobSeeker');
const employer = require('./employer');

router.use('/jobSeeker', jobSeekerRouter);
router.use('/employer', employerRouter);

// Routes go here
//route.get()

module.exports = router;