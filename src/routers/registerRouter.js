import express from "express"
import {register} from "../controller/registerController";

const router = express.Router();

router.post("/", (req, res) => {
    console.log("Register route called.");
    register(req.body)
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.status(400).json(error)
        })
});

export default router
