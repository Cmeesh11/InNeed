// If the user is not logged in or they aren't an employer, redirect the request to the login route
const withEmployerAuth = (req, res, next) => {
  if (!req.session.logged_in || !req.session.employer) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withEmployerAuth;
