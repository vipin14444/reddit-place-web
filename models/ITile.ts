import COLOR from "../enums/color";

const DEFAULT_COLOR = COLOR.WHITE;

export interface ITile {
  color: COLOR;
  id: string;
  x: number;
  y: number;
}

export default class Tile implements ITile {
  color: COLOR;
  id: string;
  x: number;
  y: number;

  constructor({
    color,
    id,
    x,
    y,
  }: { color?: COLOR; id?: string; x?: number; y?: number } = {}) {
    this.color = color || DEFAULT_COLOR;
    this.id = id || "";
    this.x = x || 0;
    this.y = y || 0;
  }
}
