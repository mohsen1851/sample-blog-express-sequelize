const {DataTypes} = require("sequelize");
const {sequelize} = require("../connection");
const {UserModel} = require("./user");

const PostModel = sequelize.define('Post', {
    // Model attributes are defined here
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id:{
        type:DataTypes.INTEGER,
        allowNull: false
    }
});
PostModel.belongsTo(UserModel,{
    foreignKey:"user_id"
})
UserModel.hasMany(PostModel,{
    foreignKey:"user_id"
})
module.exports={PostModel}