const sequelize = require('../utils/dbconnect');
const Sequelize = require('sequelize');

const studentid = sequelize.define('tblstudentid', {
    id: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true },
    firstname: { type: Sequelize.STRING, allowNull: false },
    lastname: { type: Sequelize.STRING, allowNull: false },
    phone: {type:Sequelize.INTEGER, allowNull: false},
    email: {type:Sequelize.STRING, allowNull: false},
    address1: {type:Sequelize.STRING, allowNull: false},
    address2: {type:Sequelize.STRING, allowNull: true},
    pincode: {type:Sequelize.STRING, allowNull: false},
    
});

module.exports = studentid;