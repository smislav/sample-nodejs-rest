export const createSuccessResponse = (data) => ({
    success: true,
    data: data
});

export const createFailureResponse = (message) => ({
    success: false,
    message: message
});
