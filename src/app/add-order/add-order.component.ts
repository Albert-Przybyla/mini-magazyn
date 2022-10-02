import { Component, OnInit } from '@angular/core';
import { type } from '../type';
import { Person } from '../person';
import { document } from '../document';
import { Storage } from '../storage';
import { StorageService } from '../storage.service';
import { Place } from '../place';
import { PLACEINSTORAGE } from '../placeInStorage';




@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  // typ zlecenia
  protected types: type[] = [type.PZ, type.WZ];
  protected chosenType: type = type.PZ;


//

  searchItem: string = "";

  // tablice do wyszukiwania

  items: Storage[] = [];

  getStorage(): void {
    this.storageService.getStorage().subscribe(Storage => this.items = Storage);
  }


  // dane do uzupełnienia //////


  protected person: Person = {
    id: 1,
    name: '',
    nip: '',
    adressCity: '',
    adressCityCode: '',
    adressStreet: '',
    adressNumber: '',
  }

  protected storageItem :Storage[] = [];

  protected document :document = {
    number: '',
    type: this.chosenType,
    date: '',
    products: this.storageItem,
    netPrice: 0,
    grossPrice: 0,
    client: this.person
  }
  // //////////////////////


  constructor(
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.getStorage()
  }
}
