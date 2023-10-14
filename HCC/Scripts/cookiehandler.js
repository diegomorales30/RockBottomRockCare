export async function addCookie(cookieName) {
    // Create header to add to request
    var requestHeaders = new Headers();
    // Specify what type of request we are sending
    requestHeaders.append("Type", "AddCookie");
    // Specify other options like POST, cors, and request body
    var requestOptions = {
        method: "POST",
        headers: requestHeaders,
        mode: "cors",
        body: cookieName
    };
    // Create the request to our website and pass in our options
    var request = new Request("https://rockbottomrockcare.com/cookie", requestOptions);
    // Create response variable
    var response = await fetch(request);
    // Handle the response with a promise
    await response.text().then(text => {
        console.log("Added cookie: ", text);
    });
}

export async function getCookieList() {
    var cookieList = [];
    var requestHeaders = new Headers()
    requestHeaders.append("Type", "GetCookieList");
    var requestOptions = {
        method: "GET",
        headers: requestHeaders,
        mode: "cors",
    };
    var request = new Request("https://rockbottomrockcare.com/cookie", requestOptions);
    var response = await fetch(request);
    await response.text().then(text => {
        cookieList = text.split(",");
    });
    return cookieList;
}
