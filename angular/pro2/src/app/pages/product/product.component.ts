import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products;
  constructor(private _http : HttpClient) {
    this._http.get("http://localhost:3000/api/product").subscribe((data)=>{
      console.log(data);
    this.products = data;
    });


   }

  ngOnInit() {
  }

}
