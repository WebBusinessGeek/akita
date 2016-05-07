import express from "express"

const APP = express()

APP.get("/", (req, res) => {
    res.json({message: "working"})
})

const PORT = "8080"
APP.listen(PORT)
console.log("server listening on port:", PORT)