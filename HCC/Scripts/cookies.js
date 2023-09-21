
function createCookie(cookieCheck){
    let coookieStr = "";

    let i = 0;
    let strLength = 8;

    while(true){

        while(i <= strLength){
            let min = 65;
            let max = 90;
            let ranNum = Math.random() * (max - min) + min;
            let ranNumRound = Math.floor(ranNum);
            let chr = String.fromCharCode(ranNumRound);
            coookieStr = cookieCheck + "rock=" +  chr;
            i = i + 1;
        }
    
        let arrStr = coookieStr.split("=");
    
        let checkCook = arrStr[1];

        if(isValidCookie(checkCook)){
            //Post Function
            break;
        }

    }
    
}

function isValidCookie(checkCook){
   let  keys = [];
    if(keys.includes(checkCook)){
        return false;
    }
    return true;
}



window.onload = (event) => {
    let cookieCheck = ""

    if(document.cookie){
        console.log("No Cookie")
        createCookie(cookieCheck)
    }
    // the search method will go in this part of the code
    console.log("Welcome back")
    return
};