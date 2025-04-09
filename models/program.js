const sequelize = require('../utils/dbconnect');
const Sequelize = require('sequelize');

const Department = require('./department');

const Program = sequelize.define('tblprogram', {
    id: { type: Sequelize.UUID, primaryKey: true, allowNull: false },
    dept_id: { type: Sequelize.UUID, allowNull: false },
    prog_name: { type: Sequelize.STRING, allowNull: false },
    prog_code: { type: Sequelize.STRING, allowNull: false, unique: true },
    prog_duration: { type: Sequelize.STRING, allowNull: false },
    prog_status: { type: Sequelize.STRING, allowNull: false }
});

Department.hasMany(Program, { foreignKey: 'dept_id' });
Program.belongsTo(Department, { foreignKey: 'dept_id'});

module.exports = Program;