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

    // Login Endpoint
    async login(userInfo) {
        return await this.request( {endpoint: "user/login", method: "POST", data: userInfo } )
    }

    // Register Endpoint
    async register(userInfo) {
        return await this.request( {endpoint: "user/register", method: "POST", data: userInfo } )
    }
}

export default new ApiClient("http://localhost:3003")