const sequelize = require('../utils/dbconnect');
const Sequelize = require('sequelize');

const Department = sequelize.define('tbldepartment', {
    id: { type: Sequelize.UUID, primaryKey: true, allowNull: false },
    dept_name: { type: Sequelize.STRING, allowNull: false },
    dept_code: { type: Sequelize.STRING, allowNull: false, unique: true },
    dept_desc: { type: Sequelize.STRING ,allowNull: false}
});

module.exports = Department;