const sequelize = require('../utils/dbconnect');
const { DataTypes } = require('sequelize');
const Year = require('./Year');
const Program = require('./course');
const Month = require('./Month');

const ProgramMonthSelection = sequelize.define('ProgramMonthSelection', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    yearId: { type: DataTypes.UUID, allowNull: false, references: { model: Year, key: 'id' } },
    programId: { type: DataTypes.UUID, allowNull: false, references: { model: Program, key: 'id' } },
    monthId: { type: DataTypes.UUID, allowNull: false, references: { model: Month, key: 'id' } },
});

ProgramMonthSelection.belongsTo(Year, { foreignKey: 'yearId' });
ProgramMonthSelection.belongsTo(Program, { foreignKey: 'programId' });
ProgramMonthSelection.belongsTo(Month, { foreignKey: 'monthId' });

module.exports = ProgramMonthSelection;
