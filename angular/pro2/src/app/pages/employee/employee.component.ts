import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employee={
    name : "",
    age : null,
    city : ""
  };


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
  add(){
    // console.log(this.employee);
    this.employes.push(this.employee);
    

  }
  empty(){
    this.employee={
      name : "",
      age : null,
      city : ""
    }
  }

  askDelete(obj){
    this.employee = obj;
  }
  delete(){
    /*
    var array = ['red', 'green', 'blue', 'yellow'];
    var z = 'blue';

    var n = array.indexOf(z);

    array.splice(n, 1);

    */
    var n = this.employes.indexOf(this.employee);
    this.employes.splice(n, 1);

  }





}
