import environment from "dotenv"
import express from "express"
import bodyParser from "body-parser"

import generalRouter from "./routers/generalRouter.js"
import loginRouter from "./routers/loginRouter.js"
import registerRouter from "./routers/registerRouter.js"
import usersRouter from "./routers/usersRouter.js"

environment.config()

let app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/api", generalRouter)
app.use("/login", loginRouter)
app.use("/register", registerRouter)
app.use("/users", usersRouter)

app.listen(8080)
console.log("Server started on port " + 8080)
