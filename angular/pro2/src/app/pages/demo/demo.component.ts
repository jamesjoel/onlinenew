import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/*
  when we use service in our class (component), then we have to declear
  it in constructor()  ----- (Dependancy Injection)
  example

    construct(scope varialbe : service name){

    }
    scope ---- private/publie



*/

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  employes;
  constructor(private _http : HttpClient) {
    this._http.get("http://localhost:3000/api/employee").subscribe(data=>{
      console.log(data);
      this.employes = data;
    });
   }

  ngOnInit() {
  }

  test(){
    this._http.get("http://localhost:3000/api/employee").subscribe(data=>{
      console.log(data);
    });
  }

}
/*
  .subscribe(function(x){

  })

*/
