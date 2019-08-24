import express from "express"
import {authorize} from "./base/authorization";
import {getUserByID} from "../controller/userController";

const router = express.Router()

router.get("/:id", authorize, (req, res) => {
    console.log("Get user by ID route called.")
    getUserByID(req.params.id)
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.status(400).json(error)
        })
})

export default router
