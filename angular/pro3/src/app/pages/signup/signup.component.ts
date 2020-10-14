import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user={
    full_name : "",
    username : "",
    password : "",
    re_password : "",
    address : "",
    city : "",
    contact : null,
    gender : "",
    language : []

  };
  lang1=false;
  lang2=false;
  lang3=false;
  lang4=false;
  constructor(private _loginServ : LoginService, private _router : Router) { }

  ngOnInit() {
  }
  signup(){
    if(this.lang1){
      this.user.language.push("hindi");
    }
    if(this.lang2){
      this.user.language.push("english");
    }
    if(this.lang3){
      this.user.language.push("gujrati");
    }
    if(this.lang4){
      this.user.language.push("marathi"); 
    }


    this._loginServ.addUser(this.user).subscribe((data)=>{
      console.log("----", data);
      this._router.navigate(["/login"]); 
    })
  }

}
