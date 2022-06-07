import Position2D from './utils/Position2D';

export enum ColorsEnum {
  BLUE,
  RED,
  GREEN,
  PURPLE
}

export default class Card {
  private pos: Position2D;
  private color: ColorsEnum;
  private hint: number;
  private dragged: boolean;
  private revealed: boolean;

  constructor(_pos: Position2D, _color: ColorsEnum) {
    this.pos = _pos;
    this.color = _color;
    this.hint = -1;
    this.dragged = false;
    this.revealed = false;
  }

  get Pos() { return this.pos; }
  get Color() { return this.color; }
  get Hint() { return this.hint; }
  get Dragged() { return this.dragged; }
  get Revealed() { return this.revealed; }

  set Pos(_newPosition: Position2D) {
    this.pos.X = _newPosition.X;
    this.pos.Y = _newPosition.Y;
  }
  set Hint(_hint: number) {
    if (this.hint >= 0)
      throw new Error(`Hint already defined for card at pos ${this.pos}`);
    this.hint = _hint;
  }
  set Dragged(_dragged: boolean) {
    if (_dragged && this.dragged)
      throw new Error(`Card is already being dragged at pos ${this.pos}`);
    this.dragged = _dragged;
  }
  set Revealed(_revealed: boolean) {
    if (_revealed && this.revealed)
      throw new Error(`Card is already revealed at pos ${this.pos}`);
    this.revealed = _revealed;
  }
}