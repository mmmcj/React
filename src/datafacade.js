const url = "http://localhost:8084/jwtbackend/api/";

function makeOptions(method, body) {
    var opts = {
        method: method,
        headers: {
            "Content-type": "application/json"
        }
    }
    if (body) {
        opts.body = JSON.stringify(body);
    }
    return opts;
}

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

class DataFacade {
    login = (credentials) => {
        const options = makeOptions("POST", credentials);
        return fetch(URL + "login").then(handleHttpErrors);
    }

}