import {newRouter, parser} from "./../services/APIRoutingService"
import {successResponse, failResponse} from "./../services/APIResponseService"
import {MISSING_TOKEN_ERROR, USER_AUTH_CHECK_SUCCESS, USER_AUTH_CHECK_FAILED} from  "./../constants/notifications"
import jwt from "jsonwebtoken"
import {TOKEN_SECRET} from "./../_private/token_secret"

let router = newRouter()

router.post("/", parser.array(), (req, res) => {
    let token = req.body.token
    if(!token) {
        return res.json(failResponse(MISSING_TOKEN_ERROR))
    }
    jwt.verify(token, TOKEN_SECRET, (err) => {
        return (!err) ?
            res.json(successResponse(USER_AUTH_CHECK_SUCCESS)) : res.json(failResponse(USER_AUTH_CHECK_FAILED))
    })
})

module.exports = router