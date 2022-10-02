import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Storage } from '../storage';
import { StorageService } from '../storage.service';

import { document } from '../document';
import { type } from '../type';

import { Person } from '../person';



@Component({
  selector: 'app-add-wz-document',
  templateUrl: './add-wz-document.component.html',
  styleUrls: ['./add-wz-document.component.css']
})
export class AddWzDocumentComponent implements OnInit {

  chosenType = type.WZ;

  resultsShow = false;

  searchItem = '';

  modelPerson: Person = {
    id: 1,
    name: '',
    nip: '',
    adressCity: '',
    adressCityCode: '',
    adressStreet: '',
    adressNumber: '',
  }


  modelDocument:document = {
    number: this.genDocumentNumber(),
    type: this.chosenType,
    date: "",
    products: [],
    netPrice: 0,
    grossPrice: 0,
    client: this.modelPerson
  }

  constructor(
    private storageService: StorageService
  ) { }

    // tablice do wyszukiwania

    items: Storage[] = [];

    getStorage(): void {
      this.storageService.getStorage().subscribe(Storage => this.items = Storage);
    }


  ngOnInit(): void {
    this.getStorage()
  }


    /// number of document /////

    getCurrentData():string | null{
      return (new DatePipe('en-US').transform(new Date(), 'YYYY/MM/dd'))
    }

    genDocumentNumber(): string{
      const number:string = this.chosenType+'/'+this.getCurrentData();
      return number;
    }

    ////////////////////////////

    showResults(name: string, item:Storage | string): void {
      this.resultsShow = !this.resultsShow;
      this.searchItem = name;

    }

}



