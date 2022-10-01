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

}
