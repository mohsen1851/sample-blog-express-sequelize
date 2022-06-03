const {Sequelize} = require("sequelize");
const sequelize = new Sequelize("test", "root", "", {dialect: "mysql", host: 'localhost'})

checkConnection();

async function checkConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


module.exports = {sequelize};