import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employes = [
    {
      name : "rohit",
      age : 25,
      city : "indore"
    },
    {
      name : "jaya",
      age : 30,
      city : "mumbai"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
