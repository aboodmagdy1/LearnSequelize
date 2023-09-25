const Sequelize = require("sequelize"); //constractor function
const mysql = require("mysql2");



const sequelize = new Sequelize("learn_sequelize", "root", "abood123magdy**", {
  host: "localhost",
  port: 2345,
  dialect: "mysql",
});

module.exports = sequelize;