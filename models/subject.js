const sequelize = require('../utils/dbconnect');
const Sequelize = require('sequelize');

const Program = require('./program');

const Subject = sequelize.define('tblsubject', {
    id: { type: Sequelize.UUID, primaryKey: true, allowNull: false },
    prog_id: { type: Sequelize.UUID, allowNull: false },
    subject_name: { type: Sequelize.STRING, allowNull: false },
    subject_code: { type: Sequelize.STRING, allowNull: false, unique: true },
    subject_desc: { type: Sequelize.STRING, allowNull: false },
});

Subject.belongsTo(Program, { foreignkey: 'prog_id'});
Program.hasMany(Subject, { foreignkey: 'prog_id'});

module.exports = Subject;