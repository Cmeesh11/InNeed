const sequelize = require('../config/connection');
const { Post, Employer } = require('../models');

const postData = require('./posts.json');
const employerData = require('./employers.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Employer.bulkCreate(employerData, {
    individualHooks: true,
    returning: true
  });

  await Post.bulkCreate(postData);
  process.exit(0);
};

seedDatabase();
