const BASEURL = "https://gowow.vercel.app/";

export function userLoginAPI(userName: string, password: string, callback: Function) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "userName": userName,
        "password": password
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(BASEURL + "api/auth/login", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log("\n\n UserLoginAPI result")
            callback(result);
        })
        .catch(error => {
            callback(null);
            console.log('\n\n UserLoginAPI error: ', error)
        });
}

export function userRegisterAPI(
    role: string,
    name: string,
    mobile: string,
    city: string,
    location: string,
    level: string,
    userName: string,
    password: string,
    callback: Function
) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "role": role,
        "name": name,
        "userName": userName,
        "password": password,
        "mobileNumber": mobile,
        "city": city,
        "location": "Delhi",
        "address": "Random address",
        "level": "xyz"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(BASEURL + "api/auth/register", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log("\n\n UserRegisterAPI result")
            callback(result);
        })
        .catch(error => {
            callback(null);
            console.log('\n\n UserRegisterAPI error: ', error)
        });
}

export function fetchAllNGSAPI(location: string, callback: Function) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(BASEURL + "api/ngo/getallngo?location=" + location, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log("\n\n fetchAllNGSAPI result")
            callback(result);
        })
        .catch(error => {
            callback(null);
            console.log('\n\n fetchAllNGSAPI error: ', error)
        });
}

export function fetchAllOpportunity(location: string, callback: Function) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(BASEURL + "api/ngo/getallopportunity", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log("\n\n fetchAllOpportunity result")
            callback(result);
        })
        .catch(error => {
            callback(null);
            console.log('\n\n fetchAllOpportunity error: ', error)
        });
}

export function fetchSingleOpportunity(opportunityId: string, callback: Function) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(BASEURL + "api/ngo/getopportunity/" + opportunityId, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log("\n\n fetchSingleOpportunity result")
            callback(result);
        })
        .catch(error => {
            callback(null);
            console.log('\n\n fetchSingleOpportunity error: ', error)
        });
}
