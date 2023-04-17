const employerRouter = require('express').Router();

// Renders a form for the employer to fill out
employerRouter.get('/post', async (req, res) => {
  try {
    res.render('jobpost');
  } catch (err) {
    res.status(500).json(err);
  }
});

employerRouter.get('/confirm', (req, res) => {
  try {
    res.render('jobpostConfirmation');
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = employerRouter;
