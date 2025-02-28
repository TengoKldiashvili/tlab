const originalKartebi = ["6a", "6g", "6j", "6k", "7a", "7g", "7j", "7k", "8a", "8g", "8j", "8k", "9a", "9g", "9j", "9k", "10a", "10g", "10j", "10k", "va", "vg", "vj", "vk", "da", "dg", "dj", "dk", "ka", "kg", "kj", "kk", "ta", "tg", "tj", "tk"];
const changecard = [];
const originalCard = ["1", "1", "1", "1", "2", "2", "2", "2", "3", "3", "3", "3", "4", "4", "4", "4", "5", "5", "5", "5", "6", "6", "6", "6", "7", "7", "7", "7", "8", "8", "8", "8", "9", "9", "9", "9"];
let kartebi = [...originalKartebi];
let card = [...originalCard];
let i = 1;
let o = 0;
const reload = document.getElementById("reload");
const change = document.getElementById("change");
const buttonup = document.getElementById("up");
const buttondown = document.getElementById("down");
const result = document.getElementById("result");
let balance = parseInt(document.getElementById("balance").innerText)
const balanceForChange = document.getElementById("balance");
let plus = 20;
function plus20() {
    document.getElementById("plus20").classList.remove("buttonplus");
    document.getElementById("plus40").classList.add("buttonplus");
    document.getElementById("plus60").classList.add("buttonplus");
    document.getElementById("plus80").classList.add("buttonplus");
    plus = 20;
}
function plus40() {
    document.getElementById("plus40").classList.remove("buttonplus");
    document.getElementById("plus20").classList.add("buttonplus");
    document.getElementById("plus60").classList.add("buttonplus");
    document.getElementById("plus80").classList.add("buttonplus");
    plus = 40;
}
function plus60() {
    document.getElementById("plus60").classList.remove("buttonplus");
    document.getElementById("plus20").classList.add("buttonplus");
    document.getElementById("plus40").classList.add("buttonplus");
    document.getElementById("plus80").classList.add("buttonplus");
    plus = 60;
}
function plus80() {
    document.getElementById("plus80").classList.remove("buttonplus");
    document.getElementById("plus20").classList.add("buttonplus");
    document.getElementById("plus40").classList.add("buttonplus");
    document.getElementById("plus60").classList.add("buttonplus");
    plus = 80;
}
function get() {
    let r = Math.floor(Math.random() * kartebi.length);
    let refresh = document.getElementById("refresh");
    refresh.src = "deck/" + kartebi[r] + ".png";
    changecard.push(card[r]);
    kartebi.splice(r, 1);
    card.splice(r, 1);
    o++;
}
function cardchange() {
    get();
    ////balancebuttons
    document.getElementById("plus20").disabled = true;
    document.getElementById("plus40").disabled = true;
    document.getElementById("plus60").disabled = true;
    document.getElementById("plus80").disabled = true;
    /////
    change.disabled = true;
}
function up() {
    let randomup = Math.floor(Math.random() * kartebi.length);
    document.images[i].src = "deck/" + kartebi[randomup] + ".png";
    changecard.push(card[randomup]);
    kartebi.splice(randomup, 1);
    card.splice(randomup, 1);
    change.disabled = true;
    ////balancebuttons
    document.getElementById("plus20").disabled = true;
    document.getElementById("plus40").disabled = true;
    document.getElementById("plus60").disabled = true;
    document.getElementById("plus80").disabled = true;
    /////
    if (changecard[o] >= changecard[o - 1]) {
        balanceForChange.innerHTML = balance;
        result.innerHTML = "WIN";
        result.className = "result result-win";
        i++;
    } else {
        result.innerHTML = "LOOSE";
        result.className = "result result-lose";
        buttondown.disabled = true
        buttonup.disabled = true
        reload.disabled = false
        ////balancebuttons
        document.getElementById("plus20").disabled = false;
        document.getElementById("plus40").disabled = false;
        document.getElementById("plus60").disabled = false;
        document.getElementById("plus80").disabled = false;
        /////
    }
    o++;
    if (i == 6) {
        balance += plus * 8;
        balanceForChange.innerHTML = balance;
        reload.disabled = false
        buttondown.disabled = true
        buttonup.disabled = true
        result.innerHTML = "YOU WIN,GAME OVER";
        result.className = "result result-win";
        ////balancebuttons
        document.getElementById("plus20").disabled = false;
        document.getElementById("plus40").disabled = false;
        document.getElementById("plus60").disabled = false;
        document.getElementById("plus80").disabled = false;
        /////
    }
}
function down() {
    let randomup = Math.floor(Math.random() * kartebi.length);
    document.images[i].src = "deck/" + kartebi[randomup] + ".png";
    changecard.push(card[randomup]);
    kartebi.splice(randomup, 1);
    card.splice(randomup, 1);
    change.disabled = true;
    console.log(plus)
    ////balancebuttons
    document.getElementById("plus20").disabled = true;
    document.getElementById("plus40").disabled = true;
    document.getElementById("plus60").disabled = true;
    document.getElementById("plus80").disabled = true;
    /////
    if (changecard[o] <= changecard[o - 1]) {
        result.display = ""
        result.innerHTML = "WIN";
        result.className = "result result-win";
        i++;
    } else {
        result.innerHTML = "LOOSE";
        result.className = "result result-lose";
        buttondown.disabled = true
        buttonup.disabled = true
        reload.disabled = false
        ////balancebuttons
        document.getElementById("plus20").disabled = false;
        document.getElementById("plus40").disabled = false;
        document.getElementById("plus60").disabled = false;
        document.getElementById("plus80").disabled = false;
        /////
    }
    o++;
    if (i == 6) {
        balance += plus * 8;
        balanceForChange.innerHTML = balance;
        reload.disabled = false
        buttondown.disabled = true
        buttonup.disabled = true
        result.innerHTML = "YOU WIN,GAME OVER";
        result.className = "result result-win";
        ////balancebuttons
        document.getElementById("plus20").disabled = false;
        document.getElementById("plus40").disabled = false;
        document.getElementById("plus60").disabled = false;
        document.getElementById("plus80").disabled = false;
        /////
    }
}
function rel() {
    if (balance - plus >= 0) {
        i = 1;
        o = 0;
        kartebi = [...originalKartebi];
        kartebi = [...originalKartebi];
        card = [...originalCard];
        for (let j = 1; j <= 5; j++) {
            document.images[j].src = "deck/blank.png";
        }
        reload.disabled = true;
        buttondown.disabled = false;
        buttonup.disabled = false;
        change.disabled = false;
        changecard.length = 0;
        result.innerHTML = "RESULT";
        result.className = "result result-normal";
        ///balancebuttons
        document.getElementById("plus20").disabled = true;
        document.getElementById("plus40").disabled = true;
        document.getElementById("plus60").disabled = true;
        document.getElementById("plus80").disabled = true;
        /////
        balance -= plus;
        balanceForChange.innerHTML = balance;
        get()
    } else {
        // Handle the case when balance is zero
        result.innerHTML = "You've run out of balance! Please reload or change bet to continue.";
        result.className = "result result-lose";
        balanceForChange.classList.add("shake");
    }

}

