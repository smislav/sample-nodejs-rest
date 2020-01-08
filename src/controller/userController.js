import models from "../database/models"

import {createSuccessResponse} from "../routers/base/apiResponse";

const User = models.User;

export const getUserByID = async (id) => {
    let user = await User.findByPk(id);
    if (user) {
        return createSuccessResponse(user)
    } else {
        return createSuccessResponse(null)
    }
};
