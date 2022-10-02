import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { document } from './document';
import { documents } from './documents';

@Injectable({
  providedIn: 'root'
})
export class documentService {

  constructor() { }

  getDocuments(): Observable<document[]> {
    const Documents = of(documents);
    console.log("lalal")
    return Documents;
  }

  addDocument(document: document) {
    documents.push(document);
    console.log(documents)
  }


}
