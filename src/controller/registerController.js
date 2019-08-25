import jwt from "jsonwebtoken";
import models from "../database/models"
import passwordValidator from "./base/passwordValidator"
import {createFailureResponse, createSuccessResponse} from "../routers/base/apiResponse";

const User = models.User

export const register = async (data) => {
    const valid = passwordValidator.validate(data.password)
    if (valid) {
        try {
            const user = await User.create(data)
            const token = jwt.sign({username: user.username}, process.env.JWT_SECRET)
            return createSuccessResponse({
                user: user,
                token: token
            })
        } catch (error) {
            throw createFailureResponse(error.message)
        }
    } else {
        throw createFailureResponse("Password should contain at least 6 characters, " +
            "1 digit, 1 uppercase letter and has no spaces")
    }
}


