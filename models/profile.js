const sequelize = require('../utils/dbconnect');
const Sequelize = require('sequelize');

const profile = sequelize.define('tblprofile',{
    id:{ type:Sequelize.UUID,primaryKey:true, allowNull: false},
    profilename: {type:Sequelize.STRING, allowNull: false},
    profiletype:{type:Sequelize.STRING, allowNull: false},
    description: {type:Sequelize.STRING, allowNull: false},
    email: {type:Sequelize.STRING, allowNull: false},
    phone: {type:Sequelize.INTEGER, allowNull: false},
    type:{type:Sequelize.ENUM('Local','International'), allowNull: true}
});

module.exports=profile;