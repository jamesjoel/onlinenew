import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http : HttpClient) { }

  getEmployee(){
    return this._http.get("http://localhost:3000/api/employee");
  }
  addEmployee(obj){
    return this._http.post("http://localhost:3000/api/employee", obj);
  }
  deleteEmployee(id){
    
    return this._http.delete("http://localhost:3000/api/employee/"+id);
  }
  editEmployee(obj, id){
    return this._http.put("http://localhost:3000/api/employee/"+id, obj);
  }
}
