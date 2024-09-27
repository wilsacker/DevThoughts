const router = require('express').Router();

const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');

router.use('/', homeRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/users', userRoutes);

module.exports = router;