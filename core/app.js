import express from "express"
import Root from "./../rootdirectory"

/*instantiate the express app*/
const APP = express()

/*set static directory*/
APP.use(express.static(Root + "/build"))

/*export the app*/
export default APP