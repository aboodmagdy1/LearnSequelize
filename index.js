//3rd party libraries
const app = require("express")();

//custom library
const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;
const sequelize = require("./config/databease");

const Users = sequelize.define("users", {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 21,
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Users.sync({ alter: true })
  .then(() => {
    //working wiht the updated table
    return Users.findAll({limit : 2}) //limiting the number of rows
  })
  .then((data) => {
    data.forEach((element) => {
      console.log(element.toJSON());
    });
  })

  .catch((err) => {
    console.log(err);
  });

console.log("another task ");
