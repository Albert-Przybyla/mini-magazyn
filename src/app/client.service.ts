import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { Person } from './person';
import { COMPANYNAME } from './companyName';



@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getCompanyName(id: number): Observable<Person> {
    const companyName = COMPANYNAME.find(c => c.id === id)!;
    return of(companyName)
  }

}
