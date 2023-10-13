import { addCookie, getCookieList } from "./cookiehandler.js";
/** 
 * This function creats a cookie string with a size of 9 characters
 * This only happend when the page loads.
*/
let coutnClick = 0;

async function createCookie(cookieCheck){
    let i = 0;
    let strLength = 8;
    cookieCheck = "rock="
    
    while (true) {
        while (i <= strLength) {
            let min = 65;
            let max = 90;
            let ranNum = Math.random() * (max - min) + min;
            let ranNumRound = Math.floor(ranNum);
            let chr = String.fromCharCode(ranNumRound);
            cookieCheck = cookieCheck + chr;
            i = i + 1;
        }
        let arrStr = cookieCheck.split("="); 
        let count = "count=0";
        let checkCook = arrStr[1];
        if (await isValidCookie(checkCook)) {
            await addCookie(checkCook);
            document.cookie = cookieCheck;
            document.cookie = count;
            break;
        }
    }

    
}

/** 
 * This frunction checks to see if a key exist
 * If the key is found in the data base then it
 * will return true if cookie found else false if 
 * not found in data base
*/
async function isValidCookie(checkCook){
    let keys = await getCookieList();
    if (keys.includes(checkCook)) {
        return false;
    }
    return true;
}

/**
 * this function is called when you click a button
 */
function keepCount(){
    let getCookie = document.cookie;
    console.log(getCookie)
    if (getCookie.length == 23)
        var numcount = getCookie.charAt(getCookie.length - 1);
    else 
        var numcount = getCookie.substring(getCookie.length - 2, getCookie.length)
    console.log(numcount)
    let countClick = parseInt(numcount) + 1;
    console.log(countClick);
    getCookie = getCookie.substring(0, getCookie.length - 1);
    getCookie = getCookie + countClick;
    let countAsCookie = "count=" + countClick
    document.cookie = countAsCookie;
}

/**
 * funtion for async 
 */



/** 
 * This function will run when the page loads
*/
window.onload = async (event) => {
    window.keepCount = keepCount;
    let cookieCheck = "";
    if (document.cookie) {
        console.log("Welcome back");
    }
    else {
        console.log("No Cookie");
        await createCookie(cookieCheck);
    }
    var cookieList = await getCookieList();
    document.getElementById("userCount").innerHTML = "Total unique visitors: " + cookieList.length;
};