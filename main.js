//Rules 
//Whack-a-squirrel as much as you can and when you done 20 points getting to next level 
let info = {
        moles: '',
        score: 0,
        level: 0

    },
    lastIndex = -1,
    times = 0;

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
    times = 0;
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
    let index = lastIndex;
    while (lastIndex == index) {
        index = (Math.random() * 6) | 0;
    }
    if (lastIndex != -1) {
        info.moles[lastIndex].classList.remove('active');
    }
    lastIndex = index;
    info.moles[index].classList.add('active')
}