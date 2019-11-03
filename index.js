(function(){

let circleNumber = 1;
let score = 0;
let intervalId = 0;
const containerTop = document.querySelector('.container-top-section');
const pointsCounter = document.querySelector('.points-counter');
const btnStart = document.querySelector('.btn-start');
const btnStop = document.querySelector('.btn-stop');

btnStart.addEventListener('click', function(){
    start();
});

btnStop.addEventListener('click', function(){
    clearInterval(intervalId);
});

function start(){
    intervalId = setInterval(function start() {
        if (circleNumber > 100) {
            clearInterval(intervalId);
            alert(`Game Over, your score is ${score}`);
        } else {
            showNextNumber();
        }
    }, 2000);
}

function showNextNumber() {
    const divCircle = document.createElement('div');
    divCircle.classList.add('div-circle');
    divCircle.style.background = getBackGroundColor();
    divCircle.innerHTML = `${circleNumber++}`;
    const xy = getRandomPosition(containerTop);
    divCircle.style.top = xy[0] + 'px';
    divCircle.style.left = xy[1] + 'px';
    document.body.appendChild(divCircle);
    divCircle.addEventListener('click', function () {
        divCircle.remove();
        score++;
        pointsCounter.innerHTML = score;
        console.log(score);
    });
    setTimeout(function () {
        divCircle.remove();
    }, 1000);
}

function getRandomPosition(element) {
    const x = element.offsetHeight;
    const y = element.offsetWidth;
    const randomX = Math.floor(Math.random() * x);
    const randomY = Math.floor(Math.random() * y);
    return [randomX, randomY];
}

function getBackGroundColor() {
    const random = Math.floor(Math.random() * 3 + 1);
    switch (random) {
        case 1:
            return 'red';
        case 2:
            return 'blue';
        case 3:
            return 'green';
    }
}

start();

}());