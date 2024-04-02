 const {DataTypes, Model} = require('sequelize');
 const sequelize = require('../db');

 const Company = sequelize.define('Company',{
    companyName:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    contactName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false        
    },
    city:{
        type:DataTypes.STRING,
        allowNull:false 
    },
    state:{
        type:DataTypes.STRING,
        allowNull:false 
    },
    zipCode:{
        type:DataTypes.INTEGER,
        allowNull:false 
    },
    website:{
        type:DataTypes.STRING
    },
    companyStatus:{
        type:DataTypes.ENUM('Active', 'Inactive'),
        allowNull:false
    }
 });
 
 module.exports = Company;