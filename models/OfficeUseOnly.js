// models/OfficeUseOnly.js
const sequelize = require('../utils/dbconnect');
const Sequelize = require('sequelize');

const OfficeUseOnly = sequelize.define('OfficeUseOnly', {
    id: { type: Sequelize.UUID, primaryKey: true, allowNull: false },
    registration: { type: Sequelize.ENUM('Malaysian', 'International'), allowNull: false },
    counseledBy: { type: Sequelize.STRING },
    counseledDate: { type: Sequelize.DATE },
    introducedBy: { type: Sequelize.STRING },
    introducedDate: { type: Sequelize.DATE },
    registrationFeesPaid: { type: Sequelize.BOOLEAN },
    registrationFeesDate: { type: Sequelize.DATE },
    tuitionFeesPaid: { type: Sequelize.BOOLEAN },
    tuitionFeesDate: { type: Sequelize.DATE },
    documentsComplete: { type: Sequelize.BOOLEAN },
    documentsCompleteDate: { type: Sequelize.DATE },
    registrarSignature: { type: Sequelize.STRING },
    deanCoordinatorSignature: { type: Sequelize.STRING }
});

module.exports = OfficeUseOnly;
