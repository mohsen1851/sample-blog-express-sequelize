const {DataTypes} = require("sequelize");
const {sequelize} = require("../connection");
const {PostModel} = require("./post");
const {UserModel} = require("./user");

const CommentModel = sequelize.define('Comment', {
    // Model attributes are defined here
    body: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id:{
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    post_id:{
        type:DataTypes.INTEGER,
        allowNull: false
    }
});

CommentModel.belongsTo(PostModel,{
    foreignKey:"post_id"
})
CommentModel.belongsTo(UserModel,{
    foreignKey:"user_id"
})
PostModel.hasMany(CommentModel,{
    foreignKey:"post_id"
})
module.exports={CommentModel}