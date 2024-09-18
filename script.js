
const DIRECTION = {
    LEFT: -1,
    RIGHT: 1,
    NONE: 0
}
let currentDirection = DIRECTION.NONE;
let yVelocity = 0;
let xVelocity = 0;
let acceleration = 5;
let xFriction = 2;
let keyState = {};
const loop = () => {
    const ball = document.getElementById("ball");
    let currentLocation = ball.getBoundingClientRect().x;
    let currentHeight = ball.getBoundingClientRect().top;
    const currentPostitionChange = xVelocity * currentDirection;
    ball.style.left = currentLocation + currentPostitionChange + "px";
    ball.style.top = currentHeight + -yVelocity + "px";
    if (xVelocity != 0) {
        xVelocity -= xFriction;
    }
    if (ball.getBoundingClientRect != window.innerHeight - 100) {
        yVelocity -= acceleration;
    }
    if ((ball.getBoundingClientRect().top == window.innerHeight - 100 || ball.getBoundingClientRect().top - yVelocity > window.innerHeight - 100) && yVelocity < 0) {
        currentDirection = DIRECTION.NONE;
        ball.style.top = window.innerHeight - 100 + "px";
    }
    requestAnimationFrame(loop)
}

window.addEventListener("load", function () {
    const game = document.getElementById("game");
    const ball = document.createElement("div");

    ball.setAttribute("id", "ball");
    game.appendChild(ball);
    document.addEventListener("keydown", function (val) {
        var name = val.key;
        console.log(name);
        if (name == "ArrowRight") {
            currentDirection = DIRECTION.RIGHT;
            xVelocity = 10;
        }
        if (name == "ArrowLeft") {
            currentDirection = DIRECTION.LEFT;
            xVelocity = 10;
        }
        if (name == " ") {
            yVelocity = 40;
            currentDirection = DIRECTION.LEFT;
        }
        setTimeout(1);
    }, true);

    requestAnimationFrame(loop);

    /*
    // SNAKE

    const snakeGame = document.createElement("div");

    snakeGame.setAttribute("id", "snakeGame");
    game.appendChild(snakeGame);
    for (let i = 1; i <= 17; i++) {
        const row = document.createElement("div");
        row.setAttribute("id", "row" + i);
        row.style.display = "flex"
        snakeGame.appendChild(row);
        for (let j = 1; j <= 17; j++) {
            const column = document.createElement("div");
            column.setAttribute("id", "c" + i + j);
            column.style.height = "30px";
            column.style.width = "30px";
            column.style.display = "flex";
            column.style.justifyContent = "center";
            column.style.alignItems = "center";
            row.appendChild(column);
            if (i % 2 == 0 && j % 2 == 0) {
                column.style.backgroundColor = "DarkGreen";
            }
            else if (i % 2 != 0 && j % 2 != 0) {
                column.style.backgroundColor = "DarkGreen";
            }
            else if (i % 2 == 0 && j % 2 != 0) {
                column.style.backgroundColor = "green";
            }
            else if (i % 2 != 0 && j % 2 == 0) {
                column.style.backgroundColor = "green";
            }
        }
    }
    let snakeLength = 3;
    for (let i = 0; i > snakeLength; i++) {
        const snake = document.createElement("div");
        snake.setAttribute("class", "snake");
    }
    this.document.getElementById("c83").appendChild(snake);
*/

    
});
