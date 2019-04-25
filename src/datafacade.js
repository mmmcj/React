const url = "http://localhost:8084/jwtbackend/api/";

function makeOptions(method, body, token) {
    var opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            "x-access-token": token
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
    getToken = (credentials) => {
        const options = makeOptions("POST", credentials);
        return fetch(url + "login").then(handleHttpErrors);
    }

    login = (token, role) => {
        const options = makeOptions("GET", token);
        return fetch(url + "info/" + role).then(handleHttpErrors);
    }

}