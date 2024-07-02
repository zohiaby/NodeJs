// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node-complete', 'root', 'nodecomplete', {
//   dialect: 'mysql',
//   host: 'localhost'
// });

// module.exports = sequelize;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "epiz_34239170_testing",
  "epiz_34239170",
  "n7GudPHXfMPE4SN",
  {
    dialect: "mysql",
    host: "sql312.epizy.com",
  }
);

module.exports = sequelize;
