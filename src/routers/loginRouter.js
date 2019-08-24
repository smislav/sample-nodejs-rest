import express from "express"
import {login} from "../controller/loginController";

const router = express.Router()

router.post("/", (req, res) => {
    console.log("Login route called.")
    login(req.body)
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.status(401).json(error)
        })
})

export default router
