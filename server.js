// Modules
const { join } = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers/index.js');
require('mysql2');

// Including sequelize and sessions
const sequelize = require('./config/connection.js');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Creating new insance of express and port
const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create();

const sess = {
  secret: 'Secret password code',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict'
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// Using session middleware
app.use(session(sess));

// Setting handlebars as the engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, 'public')));

// Linking routes
app.use(routes);

// Performs an SQL query on the database
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
});
