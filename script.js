var pass = false
var score = 0;
var gameover = false;
let audio = document.createElement('audio');
audio.setAttribute('src', 'music.mp3')
let gameoveraudio = document.createElement('audio')
gameoveraudio.setAttribute('src', 'gameover.mp3');

let go = document.getElementsByClassName('gameover')[0];
go.style.opacity = 0;
document.onkeydown = function (element) {

    console.log(`key code is}`, element.keyCode);
    if (element.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add("dinoanimation");
        setTimeout(() => {
            console.log(element.keyCode);
            dino.classList.remove("dinoanimation")

        }, 700);
    }
    else if (element.keyCode == 39) {

        dino = document.querySelector('.dino');
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));

        setTimeout(() => {
            dino.style.left = (dinox + 120) + "px";

        }, 70);
    }
    else if (element.keyCode == 37) {

        dino = document.querySelector('.dino');
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));

        setTimeout(() => {
            dino.style.left = (dinox - 120) + "px";

        }, 70);
    }
}

setInterval(() => {
    dino = document.querySelector(".dino");

    obstacle = document.querySelector(".obstacle");
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
    console.log(dx, dy, ox, oy);
    var offsetx = (ox - dx);
    var offsety = (dy - oy)
    console.log(offsetx, offsety);


    if (offsetx <= 243 && offsetx >= -79) {
        if (offsety >= -66) {
            obstacle = document.querySelector(".obstacle");
            obstacle.classList.remove("obstacleanimation");
            let go = document.getElementsByClassName('gameover')[0];
            go.innerHTML = `game over <br> final score <br> ${score}`;
            go.style.opacity = 1;
            let sc = document.getElementsByClassName('scorecount')[0];
            sc.style.display = 'none';
            gameover = true;
        }
    }
    else {

        if (offsetx <= -79) {
            if (offsety < 66) {
                pass = true;
                if (pass = true) {
                    setInterval(() => {
                        score += 1;
                    }, 3000000);
                    score += 1;
                    let sc = document.getElementsByClassName('scorecount')[0];
                    sc.innerHTML = `gamscore:${score}`;
                    console.log(score)
                }
            }
        }
    }
}, 600);

setInterval(() => {
    if (gameover == true) {
        gameoveraudio.play();
        gameoveraudio.loop = flase;
        audio.muted()
    }
    else {
        
        audio.play()
        audio.loop = true;

    }


}, 500);    
