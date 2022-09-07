let homeCount  = 12
let GuestCount = 5

let homeCountEl = document.getElementById("home-count");
let GuestCountEl = document.getElementById("guest-count");

function homeIncrement1(){
    homeCount+=1;
    homeCountEl.textContent = homeCount;
}
function homeIncrement2(){
    homeCount+=2;
    homeCountEl.textContent = homeCount;
}
function homeIncrement3(){
    homeCount+=3;
    homeCountEl.textContent = homeCount;
}

function guestIncrement1(){
    GuestCount+=1;
    GuestCountEl.textContent = GuestCount;
}
function guestIncrement2(){
    GuestCount+=2;
    GuestCountEl.textContent = GuestCount;
}
function guestIncrement3(){
    GuestCount+=3;
    GuestCountEl.textContent = GuestCount;
}
