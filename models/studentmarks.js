const sequelize = require('../utils/dbconnect');
const Sequelize = require('sequelize');
const studentprofile = require('./studentprofile');

const studentmarks = sequelize.define('studentmark', {
    id: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true },
    studentId: { type: Sequelize.UUID, allowNull: false },
    subject: { type: Sequelize.STRING, allowNull: false },
    fullMarks: { type: Sequelize.INTEGER, allowNull: false },
    marksObtained: { type: Sequelize.INTEGER, allowNull: false }
});

studentprofile.hasMany(studentmarks, { foreignKey: 'studentId' });
studentmarks.belongsTo(studentprofile, { foreignKey: 'studentId' });

module.exports = studentmarks;

