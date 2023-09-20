
function createCookie(cookieCheck){
    let coookieStr = "";

    let i = 0;
    let strLength = 8;
    while(i <= strLength){
        let min = 65;
        let max = 90;
        let ranNum = Math.random() * (max - min) + min;
        let ranNumRound = Math.floor(ranNum);
        let chr = String.fromCharCode(ranNumRound);
        coookieStr = coookieStr + chr;
        i = i + 1;
}

    
}



window.onload = (event) => {
    cookieCheck = document.cookie

    if(cookieCheck == ""){
        console.log("No Cookie")
        createCookie(cookieCheck)
    }
    console.log("Welcome back")
    return
};