const router = require('express').Router();

const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;