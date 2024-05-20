import {getRequestJson, handleError, handleResponse} from "../utils/apiUtils";
import {BACKEND_URL} from "../config";

export async function signup(details) {
    return fetch(BACKEND_URL + "/signup", getRequestJson("POST", details))
        .then((resp) => {
            return resp.json();
        });
}

export async function login(creds, userType) {
    return fetch(BACKEND_URL + "/login", getRequestJson("POST", creds))
        .then(handleResponse)
        .catch(handleError);
}

// export function signout() {
//     return fetch(BACKEND_URL + "/signout", getRequestJson("POST", null))
//         .then((response) => {
//             console.log(response);
//         })
//         .catch(handleError);
// }