const sequelize = require('../utils/dbconnect');
const Sequelize = require('sequelize');

const employee = sequelize.define('tblemployee',{
    id:{ type:Sequelize.UUID,primaryKey:true, allowNull: false},
    empname: {type:Sequelize.STRING, allowNull: false},
    empdob: {type:Sequelize.DATEONLY, allowNull: false},
    empemail: {type:Sequelize.STRING, allowNull: false},
    empcontact: {type:Sequelize.STRING, allowNull: false},
    empaddress1: {type:Sequelize.STRING, allowNull: false},
    empaddress2: {type:Sequelize.STRING, allowNull: true},
    city: {type:Sequelize.STRING, allowNull: false},
    state: {type:Sequelize.STRING, allowNull: false},
    zipcode: {type:Sequelize.STRING, allowNull: false}
});

module.exports = employee;