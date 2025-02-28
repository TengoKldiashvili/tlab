const mainimg = document.getElementById("mainimg")
const bg = document.getElementById("bg");
function two() {
    bg.src = "img/bg_frame3.jpg"
    mainimg.src = "img/drink_fries_burger_cheese.png"
    console.log(mainimg.src)
}
function one() {
    bg.src = "img/bg_frame1.jpg"
    mainimg.src = "img/drink_fries_burger_chicken.png"
}
function three() {
    bg.src = "img/bg_frame4.jpg"
    mainimg.src = "img/drink_fries_burger_fish.png"
}
function last() {

    bg.src = ("img/bg_frame5.jpg")
}

function resetAnimations() {
    const elements = document.querySelectorAll('.container img,.container div');
    elements.forEach(element => {
        element.style.animation = 'none';
        element.offsetHeight;
        element.style.animation = '';
        setTimeout(one, 0);
        setTimeout(two,4800);
        setTimeout(three, 6500);
        setTimeout(last, 9000);
        setTimeout(one, 12000);
    });
}

function start() {
    setTimeout(one, 0);
    setTimeout(two, 4800);
    setTimeout(three, 6500);
    setTimeout(last, 9000);
    setTimeout(one, 12000);
    setInterval(resetAnimations, 12000);
}