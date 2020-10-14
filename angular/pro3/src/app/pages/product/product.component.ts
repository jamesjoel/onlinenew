import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private _productServ : ProductService) {
  
    this._productServ.getData().subscribe((data)=>{
      console.log("---------", data);
    })

   }

  ngOnInit() {
  }

}
