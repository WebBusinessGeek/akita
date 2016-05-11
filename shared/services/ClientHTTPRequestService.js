
export default class ClientHTTPRequestService {
    constructor(successCB = null, errorCB = null) {
        this.successCB = successCB
        this.errorCB = errorCB
        this.targetHost = "http://localhost:9090"
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