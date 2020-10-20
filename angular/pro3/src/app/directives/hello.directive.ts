import { Directive } from '@angular/core';
import { ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[hello]'
})
export class HelloDirective {

  constructor(private _ele : ElementRef) {
    this._ele.nativeElement.style.backgroundColor="#854217"; 
    this._ele.nativeElement.style.fontSize = "25px";
    this._ele.nativeElement.style.fontWeight = "bold"; 
  

    
   }
   @HostListener('click') demo(){
    //  alert("hello"); 
    this._ele.nativeElement.innerHTML="India";
   }

}
