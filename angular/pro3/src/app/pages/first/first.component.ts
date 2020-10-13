import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  a;
  b;
  ans;
  constructor(private _demo : DemoService) { }

  ngOnInit() {
  }
  test(){
     
   this.ans = this._demo.calc(this.a, this.b);
  }

}
