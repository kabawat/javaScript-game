const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");

startScreen.addEventListener("click", start);

let player = { speed: 10 };
function gamePlay() {
    let car = document.querySelector(".car");
    // let road = gameArea.getBoundingClientRect();
    moveLine(); // for move line
    moveAnemy();// for move anemy cars
    if (player.start) {
        if (keys.ArrowUp && player.y > 200) { player.y -= player.speed }
        if (keys.ArrowDown && player.y < 550) { player.y += player.speed }
        if (keys.ArrowLeft && player.x > 0) { player.x -= player.speed }
        if (keys.ArrowRight && player.x < 350) { player.x += player.speed }
        window.requestAnimationFrame(gamePlay);

        car.style.top = player.y + "px";
        car.style.left = player.x + "px";
    }
}


function start() {
    gameArea.classList.remove('hide');
    startScreen.classList.add("hide");


    player.start = true;
    window.requestAnimationFrame(gamePlay);

    for (let x = 0; x < 5; x++) {
        let roadline = document.createElement("div");
        roadline.setAttribute("class", 'anemyCar');
        roadline.y = (150 * x);
        gameArea.appendChild(roadline);
        roadline.style.top =  roadline.y + "px";
    }

    let car = document.createElement("div");
    car.setAttribute("class", 'car');
    gameArea.appendChild(car);
    // car.innerHTML = "hello word";
    for (let x = 0; x < 3; x++) {
        let anemyCar = document.createElement("div");
        anemyCar.setAttribute("class", 'anemy');
        anemyCar.y =((1+x)*350 )* -1;
        anemyCar.style.background = '#ddd';
        anemyCar.style.left = Math.floor(Math.random()*350)+"px";
        gameArea.appendChild(anemyCar);
        anemyCar.style.top =  anemyCar.y + "px";
    }

    player.x = car.offsetLeft;
    player.y = car.offsetTop;

}

let keys = {
    ArrowUp: false,
    ArrowLeft: false,
    ArrowRight: false,
    ArrowDown: false
}
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

function keyDown(d) {
    d.preventDefault();
    keys[d.key] = true;
    console.log(keys);
}

function keyUp(u) {
    u.preventDefault();
    console.log(u.key);
    keys[u.key] = false;
}
function moveAnemy(){
    let anemy =  document.querySelectorAll(".anemy");
    anemy.forEach(function(item){
        if (item.y >=700) {
                item.y -= 750;
                item.style.left = Math.floor(Math.random()*350)+"px";
        }
        item.y += player.speed;
        item.style.top =  item.y + "px";
    })
}

function moveLine(){
    let lines =  document.querySelectorAll(".lines");
    lines.forEach(function(item){
        if (item.y >=700) {
                item.y -= 750;
        }
        item.y += player.speed;
        item.style.top =  item.y + "px"
    })
}
