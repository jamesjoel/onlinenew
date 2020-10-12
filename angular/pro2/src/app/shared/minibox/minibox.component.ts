import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-minibox',
  templateUrl: './minibox.component.html',
  styleUrls: ['./minibox.component.scss']
})
export class MiniboxComponent implements OnInit {

  @Input() childName;
  @Input() xName;
  @Input() cDrop;
  constructor() { }

  ngOnInit() {
  }

}
