// models/ProgrammeOfStudy.js
const sequelize = require('../utils/dbconnect');
const Sequelize = require('sequelize');

const ProgrammeOfStudy = sequelize.define('ProgrammeOfStudy', {
    id: { type: Sequelize.UUID, primaryKey: true, allowNull: false },
    programmeTitle: { type: Sequelize.STRING, allowNull: false },
    duration: { type: Sequelize.STRING, allowNull: false },
    startDate: { type: Sequelize.DATE, allowNull: false },
    endDate: { type: Sequelize.DATE, allowNull: false },
    modeOfStudy: { type: Sequelize.STRING, allowNull: false }
});

module.exports = ProgrammeOfStudy;
