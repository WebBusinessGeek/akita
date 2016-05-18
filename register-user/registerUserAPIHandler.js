import {newRouter, parser} from "./../shared/services/APIRoutingService"
import {successResponse, errorResponse, failResponse} from "./../shared/services/APIResponseService"

let router = newRouter()

router.post("/", parser.array(), (req, res) => {
    let email = req.body.email
    let password = req.body.password
    

    /*if password and conf password don't match error*/

    /*if error getting user from database 500 error*/

    /*if user already in database error*/

    /*if no user then*/
        /*create user model instance with salted password*/

    res.json(successResponse(email))
})

export default router
