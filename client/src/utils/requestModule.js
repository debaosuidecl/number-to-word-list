import axios from "axios";

const requestModule = async (method, url, data) => {
    return new Promise(async (resolve, reject) => {

        let axiosObject = {
            method,
            url: "http://localhost:5000/api" + url,
            data: method.toLowerCase() === "post" ? data : undefined,
            headers: requirestoken
                ? {
                    "x-auth-token": token,
                }
                : undefined,
        };

        axiosObject = JSON.parse(JSON.stringify(axiosObject));
        axios(axiosObject)
            .then((res) => resolve(res))
            .catch((err) => reject(err));
    });
};

export default requestModule;
