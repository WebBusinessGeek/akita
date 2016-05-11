function httpResponse(message, status, code, data) {
    return {
        status_code: code,
        status: status,
        message: message,
        payload: {data}
    }
}

function successResponse(message, data, status = "success", code = 200) {
    return httpResponse(message, status, code, data)
}

function failResponse(message, data, status = "fail", code = 400) {
    return httpResponse(message, status, code, data)
}

function errorResponse(message, data, status = "error", code = 500) {
    return httpResponse(message, status, code, data)
}


module.exports = {
    successResponse: successResponse,
    failResponse: failResponse,
    errorResponse: errorResponse
}