export function getRequestJson(method, jsonData) {
    let data;
    data = {
        method: method,
        headers: { "content-type": "application/json" },
        credentials: "include"
    };
    if (jsonData != null) {
        data.body = JSON.stringify(jsonData);
    }
    return data;
}

export async function handleResponse(response) {
    console.log(response);
    if (response.ok) {
        return response.json();
    }
    alert("Something went wrong. check console.");
}

export function handleError(error) {
    // eslint-disable-next-line no-console
    console.log(error);
    alert("Something went wrong. check console.");
    throw error;
}