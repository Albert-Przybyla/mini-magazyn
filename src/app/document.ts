import {type} from './type';
import {Storage} from './storage';
import { Person } from './person';

export interface document {
  number: string;
  type: type;
  date: string;
  products: Storage[];
  netPrice: number;
  grossPrice: number;
  client: Person[];
}
