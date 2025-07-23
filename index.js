
// let homescoreone = document.getElementById("addHomeOne")
let homeScoreEl = document.getElementById("homeScore")
let homeScore = 0
let guestScoreEL = document.getElementById("guestScore")
let guestScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}
function increaseHomeScoretwo(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
function increaseHomeScorethree(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}
function increaseGuestScoreOne(){
    guestScore += 1
    guestScoreEL.textContent =guestScore
}
function increaseGuestScoretwo(){
    guestScore += 2
    guestScoreEL.textContent = guestScore
}
function increaseGuestScorethree(){
    guestScore += 3
    guestScoreEL.textContent = guestScore
}