import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  index=null;
  employee={
    id : null,
    name : "",
    age : null,
    city : ""
  };


  employes = [
    {
      id : 1,
      name : "rohit",
      age : 25,
      city : "indore"
    },
    {
      id : 2,
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
    if(this.employee.id) // that mean data going to update
    {
      // for(let i=0; i<this.employes.length; i++)
      // {
      //   if(this.employes[i].id == this.employee.id)
      //   {
      //     this.employes[i]=this.employee;
      //     break;
      //   }
      // }
      this.employes[this.index]=this.employee;
    }
    else{ // that means data going to add

      var n = this.employes.length;
      n++;
      this.employee.id = n;
      this.employes.push(this.employee);
    }
    

  }
  empty(){
    this.employee={
      id : null,
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
  askEdit(obj){
    // this.employee = obj;
    // break 2 way data binding
    this.index = this.employes.indexOf(obj);
    this.employee = {...obj};
  }





}
