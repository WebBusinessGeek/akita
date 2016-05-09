import express from "express"
import registerUserAPIHandler from "./../register-user/registerUserAPIHandler"

const APP = express()

APP.get("/", (req, res) => {
    res.json({message: "working"})
})

APP.use("/api/register-user", registerUserAPIHandler)

const PORT = "8080"
APP.listen(PORT)
console.log("server listening on port:", PORT)