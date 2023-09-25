//3rd party libraries
const app = require("express")();

//custom library
const sequelize = require("./config/databease");




sequelize
  .authenticate()
  .then(() => {
    console.log("connected to database successfully");
  })
  .cathc((error) => {
    console.log("error connecting to database");
  });

console.log('another task ')