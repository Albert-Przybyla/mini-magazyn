
import { Component, OnInit } from '@angular/core';

import { Client } from '../client';
import { ClientService } from './../client.service';

@Component({
  selector: 'app-company-name',
  templateUrl: './company-name.component.html',
  styleUrls: ['./company-name.component.css']
})
export class CompanyNameComponent implements OnInit {

  companyName: Client | undefined;

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
