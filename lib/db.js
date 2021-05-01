const {Sequelize} = require('sequelize');
// you can choose to connect to sqlite if you wish to
// make sure to update credentials if you are using mysql on local machine
const sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL || `mysql://root:kiera@11@localhost/recipebook-api`, {logging:false});
// const sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL || `mysql://root:kiera@11@localhost/cohort11a-capstone-api`, {logging:false});
module.exports = {sequelize};
