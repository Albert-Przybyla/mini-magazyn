import { Component, OnInit } from '@angular/core';
import { PlaceInStorageService } from '../place-in-storage.service';
import { Place } from '../place';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {
  protected menuOpen = false;
  places: Place[] = [];

  constructor(
    private placeInStorageService: PlaceInStorageService
  ) { }

  ngOnInit(): void {
    this.getPlaceInStorage();
  }

  getPlaceInStorage(): void {
    this.placeInStorageService.getPlaceInStorage().subscribe(placeInStorage => this.places = placeInStorage);
  }


  openMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

}
