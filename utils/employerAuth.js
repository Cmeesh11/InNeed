const withEmployerAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  console.log(req.session);
  if (!req.session.logged_in && !req.session.employer) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withEmployerAuth;
