import Sequelize from "sequelize"

let connection = new Sequelize("scalpel_dev", "root", "kwWashington12188!!", {
    host: "scalpel-development.c7hjed17p0ow.us-west-2.rds.amazonaws.com",
    dialect: "mysql"
})


export default connection