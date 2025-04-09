// models/CourseDetails.js
const sequelize = require('../utils/dbconnect');
const Sequelize = require('sequelize');

const CourseDetails = sequelize.define('CourseDetails', {
    id: { type: Sequelize.UUID, primaryKey: true, allowNull: false },
    courseName: { type: Sequelize.STRING },
    institutionName: { type: Sequelize.STRING },
    attendanceYear: { type: Sequelize.STRING }
});

module.exports = CourseDetails;
