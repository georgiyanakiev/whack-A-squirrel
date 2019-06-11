//Rules 
//Whack-a-squirrel as much as you can and when you done 20 points getting to next level 

let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

function initialize() {

    startBtn.style.display = 'none';
}

function resetGame() {

    resetBtn.style.display = 'none';
}

// info score 
let info = {
        moles: '',
        score: 0,
        level: 0

    },
    lastIndex = 2,
    times = 2;

// onload
onload = function() {
    info.moles = this.document.querySelectorAll('#mole'); // 
    for (const mole of info.moles) {
        mole.addEventListener('click', clicked);
    }
    play();
}

//play
function play() {
    randomize();
    times = 3;
    setTimeout(play, (Math.random() * 800 + 600));
}

//clicked 
function clicked(e) {
    e = e || window.event;
    if (e.target.classList == 'active' && times === 0) {
        times++;
        info.score++;
        document.getElementById('score').getElementsByTagName('span')[0].innerText = info.score
        info.level = (info.score / 20) | 0;
        document.getElementById('level').getElementsByTagName('span')[0].innerText = info.level
    }
}
// randomize
function randomize() {
    var index = lastIndex;
    while (lastIndex == index) {
        index = (Math.random() * 6) | 0;
    }
    if (lastIndex != -1) {
        info.moles[lastIndex].classList.remove('active');
    }
    lastIndex = index;
    info.moles[index].classList.add('active')
}