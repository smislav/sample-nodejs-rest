import 'dotenv/config';

import {createSuccessResponse} from "../routers/base/apiResponse";

export const getApiVersion = async () => {
    return createSuccessResponse(process.env.VERSION)
}
