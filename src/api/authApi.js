import {BACKEND_URL} from "../config";
import axios from "axios";
const axiosInstance = axios.create({withCredentials: true});

export async function signup(details) {
    return axiosInstance.post(BACKEND_URL + "/signup", details)
        .then((resp) => {
            return resp.data;
        });
}

export async function login(credentials) {
    return axiosInstance.post(BACKEND_URL + "/login", credentials)
        .then((resp) => {
            return resp.data;
        })
        .catch((error) => {
            console.log(error);
            alert("Something went wrong. check console.");
            return null;
        });
}