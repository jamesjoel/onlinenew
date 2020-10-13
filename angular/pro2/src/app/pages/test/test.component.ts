import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  address;
  x;

  parentVar;
  constructor() { }

  ngOnInit() {
  }
  go(){
    this.x = this.address;
  }
  demo(y){
    console.log(y);
    this.parentVar = y;
  }

}
