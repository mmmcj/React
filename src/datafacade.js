const url = "http://localhost:3000/events";

function makeOptions(method, body) {
    var opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            //"x-access-token": token
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
      return JSON.parse(atob(token.split('.')[1])).roles;
    } catch (e) {
      return null;
    }
  };

class DataFacade {
    // getToken = (credentials) => {
    //     const options = makeOptions("POST", credentials, ""); 
    //     return fetch(url + "login", options).then(handleHttpErrors);
    // }

    // login = (token) => {
    //     const role = parseJwt(token);
    //     console.log(role + "msg")
    //     const options = makeOptions("GET", "", token);
    //     return fetch(url + "info/" + role, options).then(handleHttpErrors);
    // }

    // getApi = () => fetch(url + "info/apis").then(handleHttpErrors);

    getEvents = () => fetch(url).then(handleHttpErrors);

}

export default new DataFacade();