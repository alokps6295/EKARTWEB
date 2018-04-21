import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedItem : String = 'home';

  constructor() { }

  ngOnInit() {
  }

  listClick=function(val) {
    this.selectedItem = val;  
  }

}
