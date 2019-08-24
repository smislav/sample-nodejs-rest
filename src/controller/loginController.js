import models from "../database/models"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import {createFailureResponse, createSuccessResponse} from "../routers/base/apiResponse";

const User = models.User

export const login = async (data) => {
    let user = await User.findOne({where: {username: data.username}})
    if (user) {
        let match = await bcrypt.compare(data.password, user.password)
        if (match) {
            const token = jwt.sign({username: user.username}, process.env.JWT_SECRET)
            return createSuccessResponse({
                user: user,
                token: token
            })
        } else {
            throw createFailureResponse("Wrong username or password.")
        }
    } else {
        throw createFailureResponse("Wrong username or password.")
    }
}
