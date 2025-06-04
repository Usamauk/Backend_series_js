class Apiresponse {
    constructor(statuscode , data , message = "success"){
        this.statuscode = statuscode,
        this.data = data,
        this.message = message,
        this.success = successCode < 400
    }
}

export { Apiresponse }