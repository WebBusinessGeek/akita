/* ensure api routes are setup*/
require("./apiRoutes")

import APP from "./app"
import {BUILD_DIRECTORY} from "./../shared/constants/directory"
import {API_PORT, SERVER_LISTENING_MSG} from "./../shared/constants/transport"

/* render the index.html file on GET / */
APP.get("/", (req, res) => {
    res.sendFile(BUILD_DIRECTORY + "/index.html")
})

/* setup the api to listen on correct PORT */
const PORT = API_PORT
APP.listen(PORT)
console.log(SERVER_LISTENING_MSG, PORT)