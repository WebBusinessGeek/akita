import {newRouter, parser} from "./../services/APIRoutingService"
import {successResponse, errorResponse, failResponse} from "./../services/APIResponseService"
import {MISSING_TOKEN_ERROR, USER_AUTH_CHECK_SUCCESS, USER_AUTH_CHECK_FAILED} from  "./../constants/notifications"
import jwt from "jsonwebtoken"
import {TOKEN_SECRET} from "./../_private/token_secret"

let router = newRouter()

router.post("/", parser.array(), (req, res) => {
    console.log("DEBUG***: calling TokenValidationHandler")
    let token = req.body.token
    if(!token) {
        console.log("DEBUG***: TokenValidationHandler... no token")
        return res.json(failResponse(MISSING_TOKEN_ERROR))
    }
    jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
        console.log("DEBUG***: TokenValidationHandler... decoded = " + decoded)
        if(!err) {
            console.log("DEBUG*** TokenValidationHandler... returns success")
            return res.json(successResponse(USER_AUTH_CHECK_SUCCESS))
        } else {
            console.log("DEBUG*** TokenValidationHandler... returns failed")
            return res.json(failResponse(USER_AUTH_CHECK_FAILED))
        }
    })
})

module.exports = router