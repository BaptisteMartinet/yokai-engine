import Card, { Position2D, ColorsEnum } from './Card';

export default class YokaiEngine {
  private nbColumns = 4;
  private cards: Array<Card>;

  constructor() {
    this.cards = new Array<Card>(this.nbColumns * this.nbColumns);
    this.fillCards();
  }

  private fillCards(): void {
    for (let i = 0; i < this.cards.length; i++) {
      const posX = i % this.nbColumns;
      const posY = Math.floor(i / this.nbColumns);
      const color = i % 4 as ColorsEnum;
      this.cards[i] = new Card(new Position2D(posX, posY), color);
    }
  }

  public display(): void {
    const bounds = this.cards.reduce((prev, card) => {
      if (card.Pos.X < prev.min.X) prev.min.X = card.Pos.X;
      if (card.Pos.Y > prev.min.Y) prev.min.Y = card.Pos.Y;
      if (card.Pos.X > prev.max.X) prev.max.X = card.Pos.X;
      if (card.Pos.Y < prev.max.Y) prev.max.Y = card.Pos.Y;
      return prev;
    }, { min: new Position2D(Infinity, -Infinity), max: new Position2D(-Infinity, Infinity) });
    const cardsCopy = [...this.cards];
    cardsCopy.sort((a, b) => {
      if (a.Pos.Y > b.Pos.Y)
        return -1;
      return a.Pos.X - b.Pos.X;
    });
    for (let y = bounds.min.Y; y >= bounds.max.Y; y--) {
      let str = '|';
      for (let x = bounds.min.X; x <= bounds.max.X; x++) {
        try {
          const card = this.getCard(new Position2D(x, y));
          str += ` ${card.Color.valueOf()} `;
        } catch (e) {
          str += '   ';
        }
      }
      str += '|';
      console.log(str);
    }
  }

  public getCard(pos: Position2D): Card {
    const card = this.cards.find((card => (card.Pos.equals(pos))));
    if (!card)
      throw new Error(`No card at position (${pos.X},${pos.Y})`);
    return card;
  }
}
