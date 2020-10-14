import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http : HttpClient) { }

  addUser(obj){
    return this._http.post("http://localhost:3000/api/user", obj);
  }
}
