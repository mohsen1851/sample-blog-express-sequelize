const {Sequelize} = require("sequelize");
const sequelize = new Sequelize("elated_northcutt", "root", "OPdgz19xV31vaNEfIk5CKdgN", {dialect: "mysql", host: 'vibrant-mcclintock-sjyneowoc-db'})

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