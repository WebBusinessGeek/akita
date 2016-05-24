import Sequelize from "sequelize"
import connection from "./../connection"

let User = connection.define("Users", {
    name: {
        type: Sequelize.STRING
    },
    color: {
        type: Sequelize.STRING
    },
    height: {
        type: Sequelize.STRING
    },
    hair: {
        type: Sequelize.STRING
    },
    bully: {
        type: Sequelize.BOOLEAN
    }
})

export default User