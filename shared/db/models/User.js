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
    },
    mentality: {
        type: Sequelize.STRING
    },
    happiness: {
        type: Sequelize.STRING
    }
})

export default User