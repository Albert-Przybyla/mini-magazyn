import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Client } from './client';
import { COMPANYNAME } from './companyName';



@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getCompanyName(id: number): Observable<Client> {
    const companyName = COMPANYNAME.find(c => c.id === id)!;
    return of(companyName)
  }

}
