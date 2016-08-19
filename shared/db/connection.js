import Sequelize from "sequelize"
import {isProductionEnv} from "./../../environment"
import db_configs from "./../_private/db_keys"

let getDBConfig = (setting) => {
    let db = isProductionEnv() ? "PROD_DB_"  : "DEV_DB_"
    return db_configs[db + setting]
}

let connection = new Sequelize(getDBConfig("NAME"), getDBConfig("USERNAME"), getDBConfig("PASSWORD"), {
    host: getDBConfig("HOST"),
    dialect: "mysql"
})

export default connection