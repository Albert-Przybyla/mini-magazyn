import { Component, OnInit } from '@angular/core';
import { PlaceInStorageService } from '../place-in-storage.service';
import { Place } from '../place';
import { Storage } from '../storage';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {
  protected menuOpen = false;
  places: Place[] = [];
  items: Storage[] = [];

  constructor(
    private placeInStorageService: PlaceInStorageService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.getPlaceInStorage();
    this.getStorage();
  }

  getStorage(): void {
    this.storageService.getStorage().subscribe(Storage => this.items = Storage);
  }

  getPlaceInStorage(): void {
    this.placeInStorageService.getPlaceInStorage().subscribe(placeInStorage => this.places = placeInStorage);
  }


  openMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

}
