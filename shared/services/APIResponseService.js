import {SUCCESSFUL_API_STATUS, FAILED_API_STATUS, ERRORED_API_STATUS,
SUCCESS_OK_CODE, INPUT_ERROR_CODE, SERVER_ERROR_CODE} from "./../constants/apiResponses"

function httpResponse(message, status, code, data) {
    return {
        status_code: code,
        status: status,
        message: message,
        payload: {data}
    }
}

function successResponse(message, data, status = SUCCESSFUL_API_STATUS, code = SUCCESS_OK_CODE) {
    return httpResponse(message, status, code, data)
}

function failResponse(message, data, status = FAILED_API_STATUS, code = INPUT_ERROR_CODE) {
    return httpResponse(message, status, code, data)
}

function errorResponse(message, data, status = ERRORED_API_STATUS, code = SERVER_ERROR_CODE) {
    return httpResponse(message, status, code, data)
}


module.exports = {
    successResponse: successResponse,
    failResponse: failResponse,
    errorResponse: errorResponse
}