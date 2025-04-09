const sequelize = require('../utils/dbconnect');
const { Sequelize } = require('sequelize');  // Ensure this import is correct

// Define the SubjectMarks model
const SubjectMarks = sequelize.define('SubjectMarks', {
    id: {
        type: Sequelize.UUID,  // Use Sequelize.UUID, not sequelize.UUID
        defaultValue: Sequelize.UUIDV4,  // UUIDV4 to auto-generate UUIDs
        primaryKey: true,
    },
    subject: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    classTest: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 100,
        },
    },
    assignment: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 100,
        },
    },
    finalExam: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 100,
        },
    },
    total: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            isCorrectTotal(value) {
                if (value > 100) {
                    throw new Error('Total marks cannot exceed 100.');
                }
            },
        },
    },
});

module.exports = SubjectMarks;