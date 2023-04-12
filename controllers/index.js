const router = require('express').Router();

const jobSeekerRouter = require('./jobSeeker');
const employerRouter = require('./employer');

router.use('/jobSeeker', jobSeekerRouter);
router.use('/employer', employerRouter);

// Routes go here
router.get('/login', async (req, res) => { 
    try {
      res.render('login');
    } catch (err) {
        res.status(500).json(err);
    }
    });
module.exports = router;