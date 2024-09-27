const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth'); // Middleware to check if the user is logged in

// Route to render the homepage
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('homepage', { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to render the login page
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the dashboard
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');  // Renders login.handlebars
});

// Route to render the signup page
router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect to the dashboard
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

  res.render('signup');  // Renders signup.handlebars
});

// Route to render the dashboard (only accessible when logged in)
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Fetch all posts created by the logged-in user
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
      include: [User],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('dashboard', { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;