import { Place } from "./place";

export interface Storage {
  id: number;
  name: string;
  netPrice: number;
  vat: number;
  quantity: number;
  profit: number;
}
