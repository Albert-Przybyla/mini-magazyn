import { Component, OnInit } from '@angular/core';
import { type } from '../type';
import { Person } from '../person';
import { document } from '../document';
import { Storage } from '../storage';
import { StorageService } from '../storage.service';
import { Place } from '../place';
import { PLACEINSTORAGE } from '../placeInStorage';




@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  // typ zlecenia
  protected types: type[] = [type.PZ, type.WZ];
  protected chosenType: type = type.PZ;

  constructor(
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
  }
}
