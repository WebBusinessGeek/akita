import Promise from "bluebird"

export default class BaseLogic {
    constructor(res) {
        this.res = res
        Promise.promisifyAll(this)
    }


}