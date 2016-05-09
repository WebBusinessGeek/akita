import express from "express"
import multer from "multer"


let parser = multer()

module.exports = {
    routerFactory: function() { return express.Router()},
    parser: parser
}