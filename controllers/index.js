const router = require('express').Router();

const jobSeekerRouter = require('./jobSeeker');
const employerRouter = require('./employer');

router.use('/jobSeeker', jobSeekerRouter);
router.use('/employer', employerRouter);

// Routes go here
//route.get()

router.get('/', function(req, res) {
    try {
    res.render('homepage', {loggedIn: req.session.loggedIn})
} catch (err) {
    res.status(500).json(err);
  }})
  

module.exports = router;