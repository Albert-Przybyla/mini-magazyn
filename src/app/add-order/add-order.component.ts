import { Component, OnInit } from '@angular/core';
import { type } from '../type';
import { Person } from '../person';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  protected types: type[] = [type.PZ, type.WZ];


  constructor() { }

  ngOnInit(): void {
  }

  add(perosnName: string, nip: string, adressCity: string, adressCityCode: string, adressStreet: string, adressNumber: string ){
    console.log(perosnName + ' ' + nip)
  }

}
