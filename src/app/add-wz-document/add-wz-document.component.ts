import { documents } from './../documents';
import { documentService } from './../document.service';
import { Component, OnInit } from '@angular/core';


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

  constructor(
    private storageService: StorageService,
    private documentService: documentService
  ) { }

  ngOnInit(): void {
    this.getStorage()
  }

  chosenType = type.WZ; //deklaracja typu dokumentu

  resultsShow = true; // czy pokzaywac wyniki wyszukiwania produktów

  quantity: number = 0; // wybrana ilosc produktu

  chosenItems: Storage[] = []; // przechwoanie wybranych produktów

  searchItem = ''; //nazwa wyszukiwanego produktu

  items: Storage[] = [];

  grossPrice = 0;
  netPrice = 0;

  getStorage(): void {
    this.storageService.getStorage().subscribe(Storage => this.items = Storage);
  }

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
    netPrice: 0,
    vat: 0,
    quantity: 0,
    profit: 0,
  }


  modelDocument:document = {
    id: 0,
    number: "",
    type: this.chosenType,
    data: "",
    products: this.chosenItems,
    netPrice: 0,
    grossPrice: 0,
    client: this.modelPerson
  }


    showResults(){
      this.resultsShow = !this.resultsShow;
    }

    nextStep(item:Storage): void {
      this.resultsShow = !this.resultsShow;
      this.searchItem = item.name;
      this.chosenItem = {...item};
    }

    addItemToDocument(chosenItem: Storage):void {
      if(0<this.quantity && this.quantity<=chosenItem.quantity){
      this.items.find(i => i.id === chosenItem.id)!.quantity -= this.quantity;
      chosenItem.quantity = this.quantity;
      this.chosenItems.push(chosenItem);
      this.resultsShow = true;
      this.searchItem = '';
      const priceAll = chosenItem.netPrice * chosenItem.quantity;
      this.modelDocument.netPrice += priceAll
      this.modelDocument.grossPrice += priceAll + (priceAll * chosenItem.vat / 100)
      }


    }


        /// number of document /////

        newDocument() {
          this.documentService.addDocument(this.modelDocument)
        }

        ////////////////////////////


}



