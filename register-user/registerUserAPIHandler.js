import {newRouter, parser} from "./../shared/services/APIRoutingService"
import RegisterUserLogic from "./RegisterUserLogic"

let router = newRouter()

router.post("/", parser.array(), (req, res, next) => {
    let email = req.body.email
    let password = req.body.password
    
    let logic = new RegisterUserLogic(res)
    logic.run(email, password, next)
})

export default router
