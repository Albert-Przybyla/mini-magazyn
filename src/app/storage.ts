import { Place } from "./place";

export interface Storage {
  id: number;
  name: string;
  netPriceIn: number;
  vat: number;
  quantity: number;
  profit: number;
  position: Place | string;
}
