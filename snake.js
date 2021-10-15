class Snake {
  constructor(startX, startY) {
    this.segments = [{ x: startX, y: startY }];
    this.head = this.segments[0];
    this.state = "standing"; //standing, up, down, left, right
  }

  draw() {
    for (let i = 0; i < this.segments.length; i++) {
      rect(this.segments[i].x, this.segments[i].y, 25, 25);
    }
  }

  move() {
    const newSegments = [...this.segments];
    for (let i = 1; i < this.segments.length; i++) {
      newSegments[i] = { x: this.segments[i - 1].x, y: this.segments[i - 1].y };
    }
    this.segments = newSegments;

    if (this.state === "up") {
      this.segments[0].y = this.segments[0].y - 20;
    }

    if (this.state === "down") {
      this.segments[0].y = this.segments[0].y + 20;
    }

    if (this.state === "left") {
      this.segments[0].x = this.segments[0].x - 20;
    }

    if (this.state === "right") {
      this.segments[0].x = this.segments[0].x + 20;
    }
  }

  up() {
    this.state = "up";
  }

  down() {
    this.state = "down";
  }

  left() {
    this.state = "left";
  }

  right() {
    this.state = "right";
  }

  isOutsideCanvas() {
    let outside1 = this.head.x < 0 || this.head.x > 400;
    let outside2 = this.head.y < 0 || this.head.y > 400;
    let outside3 = this.head.x < 0 || this.head.y > 400;
    let outside4 = this.head.y < 0 || this.head.y > 400;
    return outside1 || outside2 || outside3 || outside4;
  }

  collide(fruit) {
    let collideOnX = this.head.x <= fruit.x && fruit.x <= this.head.x + 25;
    let collideOnY = this.head.y <= fruit.y && fruit.y <= this.head.y + 25;
    let collideOnx2 = this.head.x <= fruit.x && fruit.x <= this.head.x + 25;
    let collideOny2 = this.head.y <= fruit.y && fruit.y <= this.head.y + 25;
    return (collideOnX && collideOnY) || (collideOnx2 && collideOny2);
  }

  collide1(snake2) {
    let collideOnX3 =
      this.head.x <= snake2.head.x && snake2.head.x <= this.head.x;
    let collideOnY3 =
      this.head.y <= snake2.head.y && snake2.head.y <= this.head.y;
    return collideOnX3 && collideOnY3;
  }

  addNewSegment() {
    this.segments.push({ x: this.head.x, y: this.head.y });
  }
}
