import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DatePipe } from '@angular/common';
import { type } from './type';
import { Person } from './person';
import { Storage } from './storage';

import { document } from './document';
import { documents } from './documents';

@Injectable({
  providedIn: 'root'
})
export class documentService {

  constructor() { }
  id: number = 0;

  getCurrentData():string | null{
    return (new DatePipe('en-US').transform(new Date(), 'YYYY/MM/dd'))
  }

  genDocumentNumber(type: type): string{
    let shortType: string = "";
    if(type == 'przyjecie'){
      shortType = "PZ"
    }else{
      shortType = "WZ"
    }
    const number:string = shortType+'/'+this.getCurrentData()+'/'+this.id;
    return number;
  }



  getDocuments(): Observable<document[]> {
    const Documents = of(documents);
    return Documents;
  }


  addDocument(document: document) {

    document.number = this.genDocumentNumber(document.type);
    document.data = this.getCurrentData();
    document.id = this.id;
    documents.push(document);
    this.id++;
  }


}
