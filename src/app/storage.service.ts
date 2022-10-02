import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Storage } from './storage';
import { storages } from './storages';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getStorage(): Observable<Storage[]> {
    const Storages = of(storages);
    return Storages;
}

  changeQuantity(newItem: Storage){
    console.log("dasdas");
    console.log(storages.find(i =>i.id === newItem.id));
    if(storages.find(i =>i.id === newItem.id)){
    storages.find(i =>i.id === newItem.id)!.quantity = newItem.quantity
    }else{
      storages.push(newItem);
    }
  }
}
