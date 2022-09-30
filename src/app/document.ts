import {type} from './type';
import {Storage} from './storage';
import { Client } from './client';

export interface document {
  number: string;
  type: type;
  date: string;
  products: Storage[];
  netPrice: number;
  grossPrice: number;
  client: Client;
}
