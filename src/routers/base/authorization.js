import jwt from "jsonwebtoken"
import {createFailureResponse} from "./apiResponse";

const handleAuthorizationMissing = (req, res) => {
    let response = createFailureResponse("Authorization missing.")
    res.status(401).json(response)
}

const handleAuthorizationFailed = (req, res) => {
    let response = createFailureResponse("Authorization failed.")
    res.status(401).json(response)
}

export const authorize = (req, res, next) => {
    console.log("Verifying authorization")
    let token = req.headers.authorization
    if (token) {
        try {
            req.token = jwt.verify(token, process.env.JWT_SECRET)
            next()
        } catch (e) {
            handleAuthorizationFailed(req, res)
        }
    } else {
        handleAuthorizationMissing(req, res)
    }
}

