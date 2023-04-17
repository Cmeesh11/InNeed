const router = require('express').Router();

const postRouter = require('./postRoutes');
const userRouter = require('./userRoutes');

router.use('/post', postRouter);
router.use('/user', userRouter);

module.exports = router;
