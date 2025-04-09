const sequelize = require('../utils/dbconnect');
const Sequelize = require('sequelize');

const studentprofile = sequelize.define('studentprofile', {
    id: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    age: { type:Sequelize.INTEGER, allowNull: false },
    school: { type: Sequelize.STRING, allowNull: false }
});

module.exports = studentprofile;