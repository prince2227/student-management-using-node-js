// models/AcademicQualification.js
const sequelize = require('../utils/dbconnect');
const Sequelize = require('sequelize');

const AcademicQualification = sequelize.define('AcademicQualification', {
    id: { type: Sequelize.UUID, primaryKey: true, allowNull: false },
    spm: { type: Sequelize.BOOLEAN },
    stpm: { type: Sequelize.BOOLEAN },
    oLevel: { type: Sequelize.BOOLEAN },
    aLevel: { type: Sequelize.BOOLEAN },
    others: { type: Sequelize.BOOLEAN },
    spmYearCompleted: { type: Sequelize.STRING },
    stpmYearCompleted: { type: Sequelize.STRING },
    oLevelYearCompleted: { type: Sequelize.STRING },
    aLevelYearCompleted: { type: Sequelize.STRING },
    othersYearCompleted: { type: Sequelize.STRING },
    subjectsAndGrades: { type: Sequelize.JSON }, // JSON to store subject-grade pairs
    cgpaGrade: { type: Sequelize.STRING }
});

module.exports = AcademicQualification;
