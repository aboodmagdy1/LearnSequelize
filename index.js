//3rd party libraries
const app = require("express")();

//custom library
const Sequelize = require("sequelize");
const sequelize = require("./config/databease");

const Users = sequelize.define("user", {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.DataTypes.STRING,
  },
  age: {
    type: Sequelize.DataTypes.INTEGER,
    defaultValue: 21,
  },
});

sequelize
  .sync()
  .then((data) => {
    console.log('Table created successfully');
  })
  .catch((err) => {
    console.log('Error while creating tables')
  });

console.log("another task ");
