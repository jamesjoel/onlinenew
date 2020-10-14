import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  index=null;
  employee={
    _id : null,
    name : "",
    age : null,
    city : ""
  };


  employes;

  constructor(private _empService : EmployeeService) { 
    this._empService.getEmployee().subscribe((data)=>{
      this.employes = data;
    });


  }

  ngOnInit() {
  }
  add(){
    // console.log(this.employee);
    if(this.employee._id) // that mean data going to update
    {
      // this._http.put("http://localhost:3000/api/employee/"+this.employee._id, this.employee).subscribe((data)=>{
      //   console.log(data);
      //   this.employes[this.index]=this.employee;
      // });
      this._empService.editEmployee(this.employee, this.employee._id).subscribe((data)=>{
        this.employes[this.index]=this.employee;
      })

      // for(let i=0; i<this.employes.length; i++)
      // {
      //   if(this.employes[i].id == this.employee.id)
      //   {
      //     this.employes[i]=this.employee;
      //     break;
      //   }
      // }
    }
    else{ // that means data going to add

      // this._http.post("http://localhost:3000/api/employee", this.employee).subscribe((data)=>{
      //   console.log(data);
      //   this.employes.push(data);
      // });
      this._empService.addEmployee(this.employee).subscribe((data)=>{
        this.employes.push(data);
      });

      /*var n = this.employes.length;
      n++;
      this.employee.id = n;
      */
    }
    

  }
  empty(){
    this.employee={
      _id : null,
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
    // this._http.delete("http://localhost:3000/api/employee/"+this.employee._id).subscribe((data)=>{
    //   // console.log(data);
    //   var n = this.employes.indexOf(this.employee);
    //   this.employes.splice(n, 1);
    // });
    this._empService.deleteEmployee(this.employee._id).subscribe((data)=>{
      var n = this.employes.indexOf(this.employee);
      this.employes.splice(n, 1);
    });

  }
  askEdit(obj){
    // this.employee = obj;
    // break 2 way data binding
    this.index = this.employes.indexOf(obj);
    this.employee = {...obj};
  }





}



/*
  1. this._http.get(url).subscribe((data)=>{

  })

  2. this._http.post(url, obj).subscribe((data)=>{

  })

  3. this._http.delete(url+id).subscribe((data)=>{

  })

  4. this._http.put(url+id, obj).subscribe((data)=>{


  })









*/

