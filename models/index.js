const Post = require('./Post.js');
const Employer = require('./Employer.js');

Employer.hasMany(Post, {
  foreignKey: 'employer_id'
});

Post.belongsTo(Employer, {
  foreignKey: 'employer_id'
});

module.exports = { Employer, Post };
