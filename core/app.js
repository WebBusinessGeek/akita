import express from "express"
import Root from "./../rootdirectory"
import cors from "cors"
import {BUILD_DIRECTORY} from "./../shared/constants/directory"
import {LOCAL_ADDR} from "./../shared/constants/transport"

/*instantiate the express app*/
const APP = express()

/*allow cors*/
let corsOptions = {
    origin: LOCAL_ADDR,
    credentials: true
}
APP.use(cors(corsOptions))

/*set static directory*/
APP.use(express.static(BUILD_DIRECTORY))

/*export the app instance*/
export default APP