import { addCookie, getCookieList } from "./cookiehandler.js";

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
        let checkCook = arrStr[1];
        if (await isValidCookie(checkCook)) {
            await addCookie(checkCook);
            document.cookie = cookieCheck;
            break;
        }
    }
}

async function isValidCookie(checkCook){
    let keys = await getCookieList();
    if (keys.includes(checkCook)) {
        return false;
    }
    return true;
}

window.onload = async (event) => {
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