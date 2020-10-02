import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  a = 10;
  b = 'rohit';

  x = "red";

  constructor() { }

  ngOnInit() {
  }

}
