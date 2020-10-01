import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  name = "rohit";
  arr = ["red", "green", "blue", "yellow", "black", "white", "pink", "gray"];

  obj = {
    first : "indore",
    second : "mumbai",
    third : "pune"
  };

  a = 100;
  b = 200;

  jsonObj = [
    {
      name : "rohit",
      age : 25,
      city : "indore"
    },
    {
      name : "james",
      age : 23,
      city : "mumbai"
    },
    {
      name : "nidhi",
      age : 27,
      city : "pune"
    },
    {
      name : "sunil",
      age : 20,
      city : "indore"
    }
  ];






  constructor() { }

  ngOnInit() {
  }
  demo(){
    alert("hello");
  }

}
