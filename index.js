//3rd party libraries
const app = require("express")();

//custom library
const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;
const sequelize = require("./config/databease");

//one-to-one relationship
//parent table
const Country = sequelize.define(
  "country",
  {
    countryName: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);
//child table
const Capital = sequelize.define(
  "capital",
  {
    capitalName: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

// Country.bulkCreate([
//   {
//     countryName: "egypt",
//   },
//   {
//     countryName: "france",
//   },
//   {
//     countryName: "germany",
//   },
//   {
//     countryName: "USA",
//   }
// ]);
// Capital.bulkCreate([
//   {
//     capitalName: "cairo",
//   },
// {
//   capitalName:'paris'
// },
// {
//   capitalName:'kalifornia'
// },
// {
//   capitalName:'maka'
// }
// ]);

Country.hasOne(Capital);
Capital.belongsTo(Country);
let capital, country;

sequelize
  .sync({ alter: true })
  .then(() => {
    //working with updated tables
    return Country.findOne({where:{countryName:'deutch'}})
  })
  .then((data) => {
   country = data 
   return Capital.findOne({where:{capitalName:'maka'}})
  })
  .then((data) => {
    capital = data
    return capital.setCountry(country)
  })
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err);
  });
