import {newRouter, parser} from "./../shared/services/APIRoutingService"
import {successResponse, errorResponse, failResponse} from "./../shared/services/APIResponseService"

let router = newRouter()

router.get("/", parser.array(), (req, res) => {
    res.json(successResponse("yo"))
})

export default router
