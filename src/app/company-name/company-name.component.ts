
import { Component, OnInit } from '@angular/core';

import { Person } from '../person';
import { ClientService } from './../client.service';

@Component({
  selector: 'app-company-name',
  templateUrl: './company-name.component.html',
  styleUrls: ['./company-name.component.css']
})
export class CompanyNameComponent implements OnInit {

  companyName: Person | undefined;

  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.getCompanyName();
  }

  getCompanyName():void {
    const id = 0;
    this.clientService.getCompanyName(id).subscribe(companeName => this.companyName = companeName)
  }

}
