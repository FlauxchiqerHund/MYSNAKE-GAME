let snake1;
let snake2;
let fruit;
let gameOver = false;
let score1 = 0;
let score2 = 0;
let bg; // background
let apple;
let sc

function preload() {
  bg = loadImage(
    "https://media.istockphoto.com/photos/green-grass-background-picture-id155596727?k=6&m=155596727&s=612x612&w=0&h=2v3Y_CvvFBfGS3ApnV5KEOYt_AGqWq0_fbDpOdE6MLE="
  );
}

function setup() {
  createCanvas(410, 410);
  snake1 = new Snake(20, 200);
  snake2 = new Snake(380, 200);
  fruit = new Fruit();
}

function draw() {
  if(sc === true){
    background("black")
    fill("white")
    textSize(40)
    text("Welcome to Snake.", 100, 200)
    textSize(25)
    text("Keys for player 1 are W,A,S,D", 50, 250)
    text("Keys for player 2 are Arrow Keys", 50, 300)
} 
  background(bg);
  //console.log(snake)
  if (gameOver) {
    background(0);
    fill("white");
    textSize(40);
    text("Game Over", 100, 200);
    textSize(25);
    text("You can restart with Q", 50, 250);

    if (snake1.isOutsideCanvas() && score1 < score2) {
      text("player 2 won", 50, 300);
    }

    if (snake2.isOutsideCanvas() && score2 < score1) {
      text("player 1 won", 50, 300);
    }

    if (
      (snake1.isOutsideCanvas && score1 === score2) ||
      (snake2.isOutsideCanvas && score2 === score1)
    ) {
      textSize(20);
      text("draw", 20, 280);
    }

     if(snake1.collide(snake2) || snake2.collide(snake1)) {
       gameOver = true
     }

    if (gameOver === true && score1 > score2) {
      textSize(20);
      text("player 1 won with " + score1 + " points", 20, 280);
    }

    if (gameOver === true && score2 > score1) {
      textSize(20);
      text("player 2 won with " + score2 + " points", 20, 280);
    }
    return;
  }

  // background("grey");
  textSize(15);
  text("player 1", 50, 30);
  text("player 2", 250, 30);
  text("score:", 50, 50);
  text("score:", 250, 50);
  text(score1, 100, 50);
  text(score2, 300, 50);
  if (frameCount % 10 === 0) {
    snake1.move();
    snake2.move();
  }
  snake1.draw();
  snake2.draw();

  fruit.draw();

  if (snake1.collide(fruit)) {
    console.log("player 1 got a fruit");
    score1 = score1 + 1;
    fruit = new Fruit();
    snake1.addNewSegment();
  }

  if (snake2.collide(fruit)) {
    console.log("player 2 got a fruit");
    score2 = score2 + 1;
    fruit = new Fruit();
    snake2.addNewSegment();
  }

  if (snake1.isOutsideCanvas() || snake2.isOutsideCanvas()) {
    gameOver = true;
  }

  if (snake1.collide(snake2)) {
    gameOver = true;
  }
}

function keyPressed() {
  if (keyCode === 87) {
    //W-Taste
    snake1.up();
  }
  if (keyCode === 83) {
    //S-Taste
    snake1.down();
  }

  if (keyCode === 65) {
    //A-Taste
    snake1.left();
  }

  if (keyCode === 68) {
    //D-Taste
    snake1.right();
  }
  if (keyCode === 38) {
    //ArrowUp
    snake2.up();
  }

  if (keyCode === 40) {
    //ArrowDown
    snake2.down();
  }

  if (keyCode === 37) {
    //ArrowLeft
    snake2.left();
  }

  if (keyCode === 39) {
    //ArrowRight
    snake2.right();
  }

  if (keyCode === 81 && gameOver === true) {
    snake1 = new Snake(20, 200);
    snake2 = new Snake(380, 200);
    fruit = new Fruit();
    gameOver = false;
    score1 = 0;
    score2 = 0;
  }
}
