import { PLACEINSTORAGE } from './placeInStorage';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceInStorageService {

  constructor() { }

  getPlaceInStorage(): Observable<string[]> {
    const placeInStorage = of(PLACEINSTORAGE);
    return placeInStorage;
  }

}
