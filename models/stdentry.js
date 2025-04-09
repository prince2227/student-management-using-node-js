const sequelize = require('../utils/dbconnect');
const Sequelize = require('sequelize');

const stdentry = sequelize.define('tblstdentry', {
    id: { type: Sequelize.UUID, primaryKey: true, allowNull: false },
    studentid: { type: Sequelize.STRING, allowNull: false, unique: true  },
    firstname: { type: Sequelize.STRING, allowNull: false},
    lastname: { type: Sequelize.STRING ,allowNull: false},
    phone:{ type:Sequelize.STRING(13),alllowNull:false},
    email: { type: Sequelize.STRING, allowNull: false, validate: { isEmail: true } },
    address1: { type: Sequelize.STRING,allowNull: false },
    address2: { type: Sequelize.STRING, allowNull: true },
    pincode: { type: Sequelize.STRING,allowNull: false}
});

module.exports = stdentry;