import models from "../database/models"
import passwordValidator from "./base/passwordValidator"
import {createFailureResponse, createSuccessResponse} from "../routers/base/apiResponse";

const User = models.User

export const register = async (data) => {
    const valid = passwordValidator.validate(data.password)
    if (valid) {
        try {
            const user = await User.create(data)
            return createSuccessResponse(user)
        } catch (error) {
            throw createFailureResponse(error.message)
        }
    } else {
        throw createFailureResponse("Password should contain at least 6 characters, " +
            "1 digit, 1 uppercase letter and has no spaces")
    }
}


