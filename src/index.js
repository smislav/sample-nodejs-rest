import express from "express"
import bodyParser from "body-parser"

import generalRouter from "./routers/generalRouter.js"

let app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/api", generalRouter)

app.listen(8080)
console.log("Server started on port " + 8080)
