import express from "express"

import { getApiVersion } from "../controller/general/generalController.js"

const router = express.Router()

router.get("/", (req, res) => {
    res.json(`API version ${getApiVersion()}`)
})

export default router
