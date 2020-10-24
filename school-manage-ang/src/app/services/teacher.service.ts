import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  url = "http://localhost:3000/api/signup";
  constructor(private _http : HttpClient) { }

  insert(obj){
    return this._http.post<any>(this.url, obj); 
  }
}
