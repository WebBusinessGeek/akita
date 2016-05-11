import express from "express"
import Root from "./../rootdirectory"

/*instantiate the express app*/
const APP = express()


import cors from "cors"


let corsOptions = {
    origin: "http://localhost:8080",
    credentials: true
}

APP.use(cors(corsOptions))
/*set static directory*/
APP.use(express.static(Root + "/build"))

/*export the app*/
export default APP