import {ROOT_API_ENDPOINT} from "./../constants/apiEndpoints"
export default class ClientHTTPRequestService {
    constructor(successCB = null, errorCB = null) {
        this.successCB = successCB
        this.errorCB = errorCB
        this.targetHost = ROOT_API_ENDPOINT
    }

    postRequest(path, data) {
        $.ajax({
            url: this.targetHost + path,
            dataType: "json",
            type: "POST",
            data: data,
            success: (response) => {
                this.successCB(response)
            },
            error: (xhr, status, err) => {
                this.errorCB(xhr, status, err)
            }
        })
    }

    getRequest(path) {
        $.ajax({
            url: this.targetHost + path,
            dataType: "json",
            type: "GET",
            success: (response) => {
                this.successCB(response)
            },
            error: (xhr, status, err) => {
                this.errorCB(xhr, status, err)
            }
        })
    }
}