import {type} from './type';
import {Storage} from './storage';
import { Person } from './person';

export interface document {
  id: Number;
  number: string;
  type: type;
  data: string | null;
  products: Storage[];
  netPrice: number;
  grossPrice: number;
  client: Person;
}
