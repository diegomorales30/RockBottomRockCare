export async function addCookie(cookieName) {
    var requestHeaders = new Headers()
    requestHeaders.append("Type", "AddCookie");
    var requestOptions = {
        method: "POST",
        headers: requestHeaders,
        mode: "cors",
        body: cookieName
    };
    var request = new Request("https://rockbottomrockcare.com/cookie", requestOptions);
    var response = await fetch(request);
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
