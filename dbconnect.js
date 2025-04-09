const Sequelize = require('sequelize');

const sequelize = new Sequelize('DBCMS','root', 'prince2002', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    omitNull: true
    });

module.exports = sequelize;