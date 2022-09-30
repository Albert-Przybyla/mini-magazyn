import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  protected menuOpen = true;

  openMenu():void {
    this.menuOpen = !this.menuOpen;
    console.log(this.menuOpen);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
