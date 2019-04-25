const url = "https://madsjustesen.dk/jwtbackend/api/";

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

const parseJwt = (token) => {
    try {
      console.log(JSON.parse(atob(token.split('.')[1])).roles);
    } catch (e) {
      return null;
    }
  };

class DataFacade {
    getToken = (credentials) => {
        const options = makeOptions("POST", credentials, "");
        return fetch(url + "login", options).then(handleHttpErrors);
    }

    login = (token) => {
        const role = parseJwt(token).roles;
        const options = makeOptions("GET", "", token);
        return fetch(url + "info/" + role, options).then(handleHttpErrors);
    }

    getApi = () => fetch(url + "info/apis").then(handleHttpErrors);

}

export default new DataFacade();