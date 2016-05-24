import {newRouter, parser} from "./../shared/services/APIRoutingService"
import {successResponse, errorResponse, failResponse} from "./../shared/services/APIResponseService"
import {MISSING_EMAIL_ERROR, MISSING_PASSWORD_ERROR} from "./../shared/constants/notifications"

let router = newRouter()

router.post("/", parser.array(), (req, res) => {
    let email = req.body.email
    let password = req.body.password

    if(!email) {
        return res.json(failResponse(MISSING_EMAIL_ERROR))
    }
    if(!password) {
        return res.json(failResponse(MISSING_PASSWORD_ERROR))
    }

    /*if user already in database error*/

    /*if no user then*/
        /*create user model instance with salted password*/

    res.json(successResponse(email))
})

export default router
