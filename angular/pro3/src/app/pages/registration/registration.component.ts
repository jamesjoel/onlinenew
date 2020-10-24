import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
/*
  FormBuilder ------ service
  FormGroup ---- interface
  Validators ---- its a class for use validation methods

*/

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user:FormGroup;
  checkSubmit=false;
  /*
  user={
    full_name : "",
    age : null
  }


  */
  constructor(private _fb : FormBuilder) {

    this.user = this._fb.group({
      full_name : ["", Validators.required],
      username : ["", [Validators.required, Validators.email]],
      password : ["", Validators.required],
      re_password : ["", Validators.required],
      address : ["", Validators.required],
      city : ["", Validators.required],
      contact : ["", Validators.required],
      gender : ["", Validators.required]
    });


   }

  ngOnInit() {
  }
  save(){
    this.checkSubmit = true;
    if(this.user.invalid){
      return;
    }
    console.log(this.user.value);
  }

}
