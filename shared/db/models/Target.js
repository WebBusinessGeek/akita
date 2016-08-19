import Sequelize from "sequelize"
import connection from "./../connection"
import Promise from "bluebird"

let Target = connection.define("Targets", {
    name: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    }
})


export default Target