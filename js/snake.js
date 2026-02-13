const canvas = document.getElementById("gameWindow");
const ctx = canvas.getContext("2d");
let timer = 0;
let score = 0;
let speed = 100;

let snake = [
    { x: 200, y: 200 },
    { x: 200, y: 180 },
    { x: 200, y: 160 },
    { x: 200, y: 140 },
    { x: 200, y: 120 },

];
let food = [];
let direction = { x: 0, y: 20 };

document.addEventListener("keydown", function (e) {

    switch (e.key) {
        case "ArrowUp":
            direction = { x: 0, y: -20 };
            break;

        case "ArrowDown":
            direction = { x: 0, y: 20 };
            break;

        case "ArrowLeft":
            direction = { x: -20, y: 0 }
            break;

        case "ArrowRight":
            direction = { x: 20, y: 0 }
            break;

    }

});



function randomInt(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};



function draw() {

    timer++;

    // SNAKE
    let head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    snake.unshift(head);
    snake.pop();

    ctx.clearRect(0, 0, 400, 400);

    snake.forEach(element => {
        ctx.fillRect(element.x, element.y, 20, 20);
    });


    // FOOD
    if (timer === 5 || timer % 20 === 0) {
        let x = randomInt(2, 38) * 10;
        let y = randomInt(2, 38) * 10;

        newFood = { x: x, y: y };
        food.unshift(newFood);

    }

    food.forEach(element => {
        ctx.fillRect(element.x, element.y, 10, 10);
    });


    // DEATH
    if (snake[0].x === 400 || snake[0].x === -20 || snake[0].y === 400 || snake[0].y === -20) {
        ctx.clearRect(0, 0, 400, 400);
        snake = [
            { x: 200, y: 200 },
            { x: 200, y: 180 },
            { x: 200, y: 160 },
            { x: 200, y: 140 },
            { x: 200, y: 120 },
        ];

        direction = { x: 0, y: 20 };

        food = [];

        timer = 0;
    };
    

    console.log(timer);

};






setInterval(draw, speed)