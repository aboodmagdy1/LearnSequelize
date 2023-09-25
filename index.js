//3rd party libraries
const app = require("express")();

//custom library
const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;
const sequelize = require("./config/databease");

const User = sequelize.define("user", {
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

User.sync({ force: true })
  .then(() => {
    //working with our updated table
    const user = User.build({
      name: "abood",
      password: "1234",
      age: 19,
      phone: 123333,
    }); //new instance of User
    return user.save()
  }).then((user) => {
    console.log('user added to database successfully')
  })
  .catch((error) => {
    console.log(error);
  });

console.log("another task ");
