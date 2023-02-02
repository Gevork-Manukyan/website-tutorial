import axios from "axios";

function processError (errors) {
    return errors?.response?.data?.error?.message;
}

class ApiClient {
    constructor(remoteHostUrl) {
        this.remoteHostUrl = remoteHostUrl
    }

    // Utility Method
    async request ({ endpoint, method = "GET", data = {} }) {
        const url = this.remoteHostUrl + "/" + endpoint

        try {
            const res =  await axios({ url, method, data })
            return { data: res.data, error: null }
        } 
        catch (errors) {
            const errorResponse = processError(errors)
            return { data: null, error: errorResponse || String(errors) }
        }
    }
}

export default new ApiClient("http://localhost:3001")