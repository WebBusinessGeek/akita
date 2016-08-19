import Sequelize from "sequelize"
import connection from "./../connection"
import Promise from "bluebird"

let User = connection.define("Users", {
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
})

Promise.promisifyAll(User)

export default User