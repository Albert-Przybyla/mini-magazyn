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
    return Documents;
  }

  addDocument(document: document) {
    documents.push(document);
  }


}
