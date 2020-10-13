import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-minitest',
  templateUrl: './minitest.component.html',
  styleUrls: ['./minitest.component.scss']
})
export class MinitestComponent implements OnInit {
  @Input() childVar;
  name;

  @Output() anyFunc = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  go(){
    this.anyFunc.emit(this.name);
  }

}
