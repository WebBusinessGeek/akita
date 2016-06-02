import request from "request"
import {MAILBOX_LAYER_API_KEY} from "./../_private/api_keys"
import Promise from "bluebird"

export default class EmailValidatorService {
    constructor() {
        this.accessKey = MAILBOX_LAYER_API_KEY
        Promise.promisifyAll(this)
    }

    verify(email, cb) {
        request("http://apilayer.net/api/check?access_key=" + this.accessKey + "&email=" + email, (err, res, body) => {
            return err ? cb(err) : cb(false, body)
        })
    }

}