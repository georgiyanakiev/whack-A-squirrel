let info = {
        moles: '',
        score: 0,
        level: 0
    },
    lastIndex = -1,
    times = 0;
onload = function() {
    info.moles = this.document.querySelectorAll('#mole');
    for (const mole of info.moles) {
        mole.addEventListener('click', clicked);
    }
    play();
}

function play() {
    randomize();
    times = 0;
    setTimeout(play, (Math.random() * 700 + 300));
}


function clicked(e) {
    e = e || window.event;
    if (e.target.classList == 'active' && times === 0) {
        times++;
        info.score++;
        document.getElementById('score').getElementsByTagName('span')[0].innerText = info.score
        info.level = (info.score / 50) | 0;
        document.getElementById('level').getElementsByTagName('span')[0].innerText = info.level
    }
}

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