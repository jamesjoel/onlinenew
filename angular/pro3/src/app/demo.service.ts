import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor() { }

  calc(a, b){
    let x  = parseInt(a);
    let y = parseInt(b);
    let c = x+y;
    return c;
  }
}
