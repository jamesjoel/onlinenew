import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  x = 200;
  y = 200;
  constructor() { }

  ngOnInit() {
  }

  demo(){
    //alert("Hello");
    this.x = 300;
    this.y = 400;
  }
  demo2(){
    this.x = 200;
    this.y = 200;
  }

}
