import {newRouter, parser} from "./../shared/services/APIRoutingService"
import AuthenticateUserLogic from "./AuthenticateUserLogic"

let router = newRouter()

router.post("/", parser.array(), (req, res, next) => {
    let email = req.body.email
    let password = req.body.password

    let logic = new AuthenticateUserLogic(res)
    logic.run(email, password, next)
})

export default router