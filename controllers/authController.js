import UserModel from '../models/userModel.js';

export const renderLogin = (req, res) => res.render('login');

export const renderSignup = (req, res) => res.render('signup');

export const handleSignup = (req, res) => {
  const { name, email, password } = req.body;
  if (UserModel.createUser({ name, email, password })) {
    res.redirect('/auth/login');
  } else {
    res.render('signup', { error: 'Email already exists.' });
  }
};

export const handleLogin = (req, res) => {
  const { email, password } = req.body;
  const user = UserModel.authenticateUser(email, password);
  if (user) {
    req.session.user = user;
    res.redirect('/jobs');
  } else {
    res.render('login', { error: 'Invalid email or password.' });
  }
};

export const handleLogout = (req, res) => {
  req.session.destroy();
  res.redirect('/auth/login');
};
