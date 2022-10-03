import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Storage } from './storage';
import { storages } from './storages';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  storageCopy: Storage[] = {...storages}

  constructor() { }

  getStorage(): Observable<Storage[]> {
    const Storage = of(storages);
    return Storage;
}

  getStorageCopy(): Observable<Storage[]> {
  const Storage = of(this.storageCopy);
  return Storage;
}

  // changeQuantity(newItem: Storage){
  //   console.log(newItem);
  //   storages.find(i =>i.id === newItem.id)!.quantity = newItem.quantity;
  // }

  addNewItem(newItem: Storage){
    storages.push(newItem);
  }
}
