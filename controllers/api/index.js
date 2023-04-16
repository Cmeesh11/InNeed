const router = require('express').Router();

const postRouter = require('./postRoutes');

router.use('/post', postRouter);

module.exports = router;
