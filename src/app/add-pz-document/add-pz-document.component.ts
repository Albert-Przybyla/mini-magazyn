  import { documents } from './../documents';
  import { documentService } from './../document.service';
  import { Component, OnInit } from '@angular/core';



  import { Storage } from '../storage';
  import { StorageService } from '../storage.service';

  import { document } from '../document';
  import { type } from '../type';

  import { Person } from '../person';




  @Component({
    selector: 'app-add-pz-document',
    templateUrl: './add-pz-document.component.html',
    styleUrls: ['./add-pz-document.component.css']
  })
  export class AddPzDocumentComponent implements OnInit {

    constructor(
      private storageService: StorageService,
      private documentService: documentService
    ) { }

    ngOnInit(): void {
      this.getStorage()
    }

    chosenType = type.PZ; //deklaracja typu dokumentu

    resultsShow = true; // czy pokzaywac wyniki wyszukiwania produktów

    quantity: number = 0; // wybrana ilosc produktu

    chosenItems: Storage[] = [] // przechwoanie wybranych produktów
    suportforChosenItems: boolean[] = [] // inforamcje o chosenItems

    searchItem = ''; //nazwa wyszukiwanego produktu

    inStorage: boolean = false; // czy produkt jest juz na magazynie

    items: Storage[] = [];      //tablica do wyszukiwania towatów

    getStorage(): void {
      this.storageService.getStorage().subscribe(Storage => this.items = Storage);
    }

    modelPerson: Person = {     // osoba na dokumencie
      id: 1,
      name: '',
      nip: '',
      adressCity: '',
      adressCityCode: '',
      adressStreet: '',
      adressNumber: '',
    }

    chosenItem: Storage = {     // towar do dodania do dokumentu i magazynu
      id: 1,
      name: '',
      netPrice: 0,
      vat: 0,
      quantity: 0,
      profit: 0,
    }


    modelDocument:document = {    // dokument
      id: 0,
      // number: this.genDocumentNumber(),
      number: '',
      type: this.chosenType,
      // data: this.getCurrentData(),
      data: '',
      products: this.chosenItems,
      netPrice: 0,
      grossPrice: 0,
      client: this.modelPerson
    }


      showResultsFromInput(name: string){
        this.resultsShow = !this.resultsShow;
        this.searchItem = name;
      }

      showResults(name: string, item:Storage): void {
        this.resultsShow = !this.resultsShow;
        this.searchItem = name;
        this.chosenItem = {...item};
        this.inStorage = true;
      }

      addItemToDocument(chosenItem: Storage):void {
        if(0<this.quantity){    // czy ilosc jest wieksza od zera
          if(this.inStorage){
            this.items.find(i => i.id === chosenItem.id)!.quantity += this.quantity;
          }else{
            chosenItem.name = this.searchItem;
          }
        chosenItem.quantity = this.quantity;
        this.chosenItems.push({...chosenItem});
        this.suportforChosenItems.push(this.inStorage);
        this.searchItem = '';
        this.inStorage = false;
        this.resultsShow = true;
        const priceAll = chosenItem.netPrice * chosenItem.quantity;
        this.modelDocument.netPrice += priceAll
        this.modelDocument.grossPrice += priceAll + (priceAll * chosenItem.vat / 100)
        }
      }


      newDocument(chosenItems : Storage[]) {
        console.log(chosenItems)
        for(let i = 0; i < chosenItems.length; i++){
          if(this.suportforChosenItems[i]===false){
            this.storageService.addNewItem(chosenItems[i])
          }
        }
        this.documentService.addDocument(this.modelDocument)
      }


  }
