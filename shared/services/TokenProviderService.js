import jwt from "jsonwebtoken"
import {TOKEN_SECRET} from "./../_private/token_secret"

export default class TokenProviderService {
    constructor() {

    }

    newToken(user) {
        return jwt.sign({user: user}, TOKEN_SECRET, {expiresIn: "60m"})
    }
}