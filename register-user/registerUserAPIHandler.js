import {routerFactory, parser} from "./../shared/services/APIRoutingService"

let router = routerFactory()

router.get("/", parser.array(), (req, res) => {
    res.json({message: "I'm working!"})
})

module.exports = router
