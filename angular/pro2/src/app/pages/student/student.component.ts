import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  name = "rohit";
  txtName;
  newName;
  drop;
  x;

  city = ["indore", "ujjain", "mumbai", "pune"];

  constructor() { }

  ngOnInit() {
  }
  demo(){
  
    this.newName = this.txtName;
  }
  demo2(){
    this.x = this.drop;
  }
}
