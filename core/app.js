import express from "express"
import cors from "cors"
import {BUILD_DIRECTORY} from "./../shared/constants/directory"
import {LOCAL_ADDR} from "./../shared/constants/transport"
import bodyParser from "body-parser"
import User from "./../shared/db/models/User"


/*instantiate the express app*/
const APP = express()

/*allow cors*/
let corsOptions = {
    origin: LOCAL_ADDR,
    credentials: true
}
APP.use(cors(corsOptions))

/*set up body-parsing*/
APP.use(bodyParser.json())
APP.use(bodyParser.urlencoded({extended: true}))

/*set static directory*/
APP.use(express.static(BUILD_DIRECTORY))

User.sync({force:true})

/*export the app instance*/
export default APP