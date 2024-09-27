const router = require('express').Router();
const { User } = require('../models');

// Signup Route
router.post('/signup', async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.loggedIn = true;

      res.status(200).json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login Route
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData) {
      res.status(400).json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;

      res.status(200).json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json(err);
  }
});

// Logout Route
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).json({ message: 'Logout failed. Please try again later.' });
      } else {
        res.status(204).end(); // Successfully logged out, no content response
      }
    });
  } else {
    res.status(404).end(); // If the user is not logged in
  }
});

module.exports = router;