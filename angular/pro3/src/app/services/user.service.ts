import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http : HttpClient, private _loginServ : LoginService) { }

  userInfo(){
    return this._http.get<any>("http://localhost:3000/api/user", { 
      headers : { Authorization : this._loginServ.getToken()}
    });
  }

}
/*

return this._http.get<any>("URL", {
  headers : { Authorization : token }
})

return this._http.post<any>("URL", obj, {
  headers : { Authorization : token }
})

return this._http.put<any>("URL+id", obj, {
  headers : { Authorization : token }
})

return this._http.delete<any>("URL+id", {
  headers : { Authorization : token }
})




*/
