
export interface Storage {
  id: number;
  name: string;
  netPriceIn: number;
  grossPriceIn: number;
  netPriceOut: number;
  grossPriceOut: number;
  vat: number;
  quantity: number;
  profit: number;
  position: string;
}
