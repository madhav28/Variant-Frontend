import axios from "axios";
import {BACKEND_URL} from "../config";

export async function loadInventory() {
    const axiosInstance = axios.create({withCredentials: true});
    return axiosInstance.get(BACKEND_URL + "/inventories")
        .then((response) => {
            console.log(response);
            return response.data.content;
        })
        .catch((error) => {
            console.log(error);
            alert("Something went wrong. check console.");
            return null;
        });
}

export async function createInventory(dataObj) {
    const axiosInstance = axios.create({withCredentials: true});
    return axiosInstance.post(BACKEND_URL + "/inventory", dataObj)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
            alert("Something went wrong. check console.");
            return null;
        });
}