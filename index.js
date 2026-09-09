// Home Increment Function Section
let countHome = document.getElementById("count-home")

let score = 0
function add1point (){
    score = score + 1
    countHome.innerText = score
}
function add2point (){
    score = score + 2
    countHome.innerText = score
}
function add3point (){
    score = score + 3
    countHome.innerText = score
}

// Guest Increment Function section
let countGuest = document.getElementById("count-guest")

let scoreGuest = 0
function add1GuestPoint (){
    scoreGuest = scoreGuest + 1
    countGuest.innerText = scoreGuest
}
function add2GuestPoint (){
    scoreGuest = scoreGuest + 2
    countGuest.innerText = scoreGuest
}
function add3GuestPoint (){
    scoreGuest = scoreGuest + 3
    countGuest.innerText = scoreGuest
}

// New Game Button 
function newGame(){
    countGuest.innerText= 0
    score=0
    countHome.innerText= 0
    scoreGuest=0
}