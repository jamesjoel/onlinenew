import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(price, dis, rating) {
    let x = price*dis/100;
    let y = price-x;
    if(rating == 5){
      let z = y*10/100;
      y = y-z;
    }
    return y;
  }

  

}
