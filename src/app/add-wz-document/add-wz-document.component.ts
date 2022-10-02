import { documents } from './../documents';
import { documentService } from './../document.service';
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

  chosenType = type.WZ; //deklaracja typu dokumentu

  resultsShow = false; // czy pokzaywac wyniki wyszukiwania produktów

  quantity: number = 0; // wybrana ilosc produktu

  chosenItems: Storage[] = [] // przechwoanie wybranych produktów

  searchItem = ''; //nazwa wyszukiwanego produktu

  newItems: Storage[] = [] //przechwoanie produktów do aktualizacji po wykonaniu dodania dokumentu

  modelPerson: Person = {
    id: 1,
    name: '',
    nip: '',
    adressCity: '',
    adressCityCode: '',
    adressStreet: '',
    adressNumber: '',
  }

  chosenItem: Storage = {
    id: 1,
    name: '',
    netPriceIn: 0,
    vat: 0,
    quantity: 0,
    profit: 0,
    position: ''
  }


  modelDocument:document = {
    id: 0,
    number: this.genDocumentNumber(),
    type: this.chosenType,
    data: this.getCurrentData(),
    products: this.chosenItems,
    netPrice: 0,
    grossPrice: 0,
    client: this.modelPerson
  }

  constructor(
    private storageService: StorageService,
    private documentService: documentService
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
      const number:string = 'WZ/'+this.getCurrentData();
      return number;
    }

    newDocument() {
      this.documentService.addDocument(this.modelDocument)
      for(let i = 0; i < this.newItems.length; i++){
        this.storageService.changeQuantity(this.newItems[i]);
        console.log(this.newItems[i])
      }
    }

    ////////////////////////////

    showResultsFromInput(name: string){
      this.resultsShow = !this.resultsShow;
      this.searchItem = name;
    }

    showResults(name: string, item:Storage): void {
      this.resultsShow = !this.resultsShow;
      this.searchItem = name;
      this.chosenItem = {...item};
    }

    addItemToDocument(chosenItem: Storage):void {
      if(0<this.quantity && this.quantity<=chosenItem.quantity){
      this.items.find(i => i.id === chosenItem.id)!.quantity -= this.quantity;

      chosenItem.quantity = this.quantity;
      this.chosenItems.push(chosenItem);
      this.searchItem = '';
      }


    }


}



