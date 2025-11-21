
const homeScoreElement = document.getElementById("home-score")
const guestScoreElement = document.getElementById("guest-score")


let homeScoreValue = 0;
let guestScoreValue = 0;


function addonepointBtn() {
    homeScoreValue = homeScoreValue + 1;
    homeScoreElement.textContent = homeScoreValue;
}

function addtwopointBtn() {
    homeScoreValue = homeScoreValue + 2;
    homeScoreElement.textContent = homeScoreValue;
}

function addthreepointBtn() {
    homeScoreValue = homeScoreValue + 3;
    homeScoreElement.textContent = homeScoreValue;
}


function addonepointBtnG() {
    guestScoreValue = guestScoreValue + 1;
    guestScoreElement.textContent = guestScoreValue;
}

function addtwopointBtnG() {
    guestScoreValue = guestScoreValue + 2;
    guestScoreElement.textContent = guestScoreValue;
}

function addthreepointBtnG() {
    guestScoreValue = guestScoreValue +3;
    guestScoreElement.textContent = guestScoreValue;
}

