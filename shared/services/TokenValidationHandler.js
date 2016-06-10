import {newRouter, parser} from "./../services/APIRoutingService"
import {successResponse, errorResponse, failResponse} from "./../services/APIResponseService"
import {MISSING_TOKEN_ERROR} from  "./../constants/notifications"

let router = newRouter()

router.post("/", parser.array(), (req, res) => {
    let token = req.body.token

    if(!token) {
        return res.json(failResponse(MISSING_TOKEN_ERROR))
    }
//    verify the token (ALSO should there be a TokenProviderService??? i think so!
})