/*models*/
import User from "./models/User"
import Target from "./models/Target"

/*seeds*/
import {seedTargetTable} from "./seeds/TargetSeeder"


export let loadDBTables = () => {
    User.sync({})
    Target.sync({})
}

export let loadDBSeeds = () =>  {
    seedTargetTable()
}

