// 2 - way databinding ... 

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name = "rohit";
  city = "indore";

  gender="male";
  constructor() { }

  ngOnInit() {
  }

}
