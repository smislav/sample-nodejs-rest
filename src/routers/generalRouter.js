import express from "express"

import {getApiVersion} from "../controller/generalController.js"

const router = express.Router();

router.get("/", (req, res) => {
    console.log("Get API version route called.");
    getApiVersion()
        .then(response => {
            res.json(response)
        })
});

export default router
