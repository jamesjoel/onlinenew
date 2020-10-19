import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product=[
    {

      title : "Sony",
      price : 25000,
      discount : 10,
      rating : 2
    },
    {
      title : "Samsung",
      price : 23500,
      discount : 12,
      rating : 4
    },
    {
      title : "I-Phone",
      price : 45000,
      discount : 3,
      rating : 5
    },
    {
      title : "Mi",
      price : 17000,
      discount : 18,
      rating : 5
    },
    {
      title : "HTC",
      price : 10000,
      discount : 5,
      rating : 5
    }
  ];
  constructor(private _productServ : ProductService) {
  
    // this._productServ.getData().subscribe((data)=>{
    //   console.log("---------", data);
    //   //this.product = data;
    // })

   }

  ngOnInit() {
  }

}
