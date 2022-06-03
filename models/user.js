const {DataTypes} = require("sequelize");
const {sequelize} = require("../connection");

const UserModel = sequelize.define('User', {
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mobile: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type:DataTypes.STRING,
        allowNull: false
    }
});
module.exports={UserModel}