import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {

  constructor(private _http : HttpClient) { }

  doUpload(obj){
    return this._http.post<any>("http://localhost:3000/upload", obj);
  }
}
