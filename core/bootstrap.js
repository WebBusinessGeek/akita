/* ensure api routes are setup*/
require("./apiRoutes")

import APP from "./app"

/* render the index.html file on GET / */
APP.get("/", (req, res) => {
    res.sendFile("./build/index.html")
})


/* setup the api to listen on set PORT */
const PORT = 9090
APP.listen(PORT)
console.log("server listening on port:", PORT)