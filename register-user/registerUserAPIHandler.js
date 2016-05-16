import {newRouter, parser} from "./../shared/services/APIRoutingService"
import {successResponse, errorResponse, failResponse} from "./../shared/services/APIResponseService"

let router = newRouter()

router.post("/", parser.array(), (req, res) => {
    let email = req.body.email
    res.json(successResponse(email))
})

export default router
