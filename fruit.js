class Fruit {
  constructor() {
    this.x = random(width);
    this.y = random(height);
  }

  draw() {
    circle(this.x, this.y, 20);
  }
}
