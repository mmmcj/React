//import { url } from "inspector";

// const url = "http://localhost:3000/events";
// const url_filter = "http://localhost:4001/events";
const URL = "https://mddenner.dk/Semesterprojekt/api/show/events/"
const URLFlights = "https://mddenner.dk/Semesterprojekt/api/show/flights/"
const slash = "/"

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

// const parseJwt = (token) => {
//     try {
//       return JSON.parse(atob(token.split('.')[1])).roles;
//     } catch (e) {
//       return null;
//     }
//   };

class DataFacade {

    getEvents = () => {
        console.log(URL)
        return fetch(URL).then(handleHttpErrors);
    }

    getEventsBySearch = (keyword) => {
        console.log(URL + keyword)
        return fetch(URL + keyword).then(handleHttpErrors);
    }

    getRandom = (numberOfEvents) => {
        const value = "random/";
        console.log(URL + value + numberOfEvents)
        return fetch(URL + value + numberOfEvents).then(handleHttpErrors);
    }

    getAirPortAndEventByDistance = (Date, Lattitude, longtitude, eventLattitude, eventLongtitude) => {
        console.log(URLFlights + Date + slash + Lattitude + slash +  longtitude + slash + eventLattitude + slash + eventLongtitude)
        return fetch(URLFlights + Date + slash + Lattitude + slash +  longtitude + slash + eventLattitude + slash + eventLongtitude)
            .then(handleHttpErrors); 
    }

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



}

export default new DataFacade();