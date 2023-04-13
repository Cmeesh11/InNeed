const employerRouter = require('express').Router();

employerRouter.get('/post', async (req, res) => {
  try {
    res.render('jobpost');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = employerRouter;
