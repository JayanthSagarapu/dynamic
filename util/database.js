const Sequelize = require("sequelize");

const sequelize = new Sequelize("express-node", "root", "Pj@8106228817", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
