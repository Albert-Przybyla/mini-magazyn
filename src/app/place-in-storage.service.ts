import { PLACEINSTORAGE } from './placeInStorage';
import { Place } from './place';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceInStorageService {

  constructor() { }

  getPlaceInStorage(): Observable<Place[]> {
    const placeInStorage = of(PLACEINSTORAGE);
    return placeInStorage;
  }

}
