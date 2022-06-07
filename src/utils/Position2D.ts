export default class Position2D {
  private x: number;
  private y: number;

  constructor(_x: number, _y: number) {
    this.x = _x;
    this.y = _y;
  }

  get X() { return this.x; }
  get Y() { return this.y; }

  set X(value: number) { this.x = value; }
  set Y(value: number) { this.y = value; }

  equals(obj: Object): boolean {
    if (!(obj instanceof Position2D))
      return false;
    return this.x === obj.X && this.y === obj.Y;
  }
}