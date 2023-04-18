const sequelize = require('../config/connection');
const { Post, Employer } = require('../models');
const JobSeeker = require('../models/JobSeeker');

const postData = require('./posts.json');
const employerData = require('./employers.json');
const jobseekerData = require('./jobSeekers.json');

const seedDatabase = async () => {
  sequelize.sync({ force: true });

  const jobseekers = await JobSeeker.bulkCreate(jobseekerData, {
    individualHooks: true,
    returning: true
  });

  const employers = await Employer.bulkCreate(employerData, {
    individualHooks: true,
    returning: true
  });

  for (const post of postData) {
    await Post.create({
      ...post,
      employer_id: employerData.id
    });
  }
};
