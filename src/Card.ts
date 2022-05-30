export class Position2D {
  public x: number;
  public y: number;

  constructor(_x: number, _y: number) {
    this.x = _x;
    this.y = _y;
  }

  equals(obj: Object): boolean {
    if (!(obj instanceof Position2D))
      return false;
    return this.x === obj.x && this.y === obj.y;
  }
}

export enum ColorsEnum {
  BLUE,
  RED,
  GREEN,
  PURPLE
}

export enum HintEnum {
  BLUE,
  RED,
  GREEN,
  PURPLE,
}

export default class Card {
  private pos: Position2D;
  private color: ColorsEnum;
  private hint: HintEnum | null;
  private dragged: boolean;
  private revealed: boolean;

  constructor(_pos: Position2D, _color: ColorsEnum) {
    this.pos = _pos;
    this.color = _color;
    this.hint = null;
    this.dragged = false;
    this.revealed = false;
  }

  get getPos() { return this.pos; }
  get getColor() { return this.color; }
  get getHint() { return this.hint; }
  get getDragged() { return this.dragged; }
  get getRevealed() { return this.revealed; }

  set setPos(_newPos: { x: number, y: number }) {
    this.pos.x = _newPos.x;
    this.pos.y = _newPos.y;
  }
  set setHint(_hint: HintEnum) {
    if (this.hint)
      throw new Error(`Hint already defined for card at pos ${this.pos}`);
    this.hint = _hint;
  }
  set setDragged(_dragged: boolean) {
    if (_dragged && this.dragged)
      throw new Error(`Card is already being dragged at pos ${this.pos}`);
    this.dragged = _dragged;
  }
  set setRevealed(_revealed: boolean) {
    if (_revealed && this.revealed)
      throw new Error(`Card is already revealed at pos ${this.pos}`);
    this.revealed = _revealed;
  }
}