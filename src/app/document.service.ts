import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DatePipe } from '@angular/common';
import { type } from './type';

import { document } from './document';
import { documents } from './documents';

@Injectable({
  providedIn: 'root'
})
export class documentService {

  constructor() { }

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
    const number:string = shortType+'/'+this.getCurrentData();
    return number;
  }



  getDocuments(): Observable<document[]> {
    const Documents = of(documents);
    return Documents;
  }


  addDocument(document: document) {
    document.number = this.genDocumentNumber(document.type);
    document.data = this.getCurrentData();
    documents.push(document);
  }


}
