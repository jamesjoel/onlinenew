import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMsg;
  // data={
  //   token : ""
  // }
  user={
    username : "",
    password : ""
  }
  constructor(private _loginService : LoginService, private _router : Router) { }

  ngOnInit() {
  }
  login(){
   this._loginService.doLogin(this.user).subscribe((data)=>{
    if(data){
      console.log(data.token); 
      localStorage.setItem("token", data.token);
      this._router.navigate(["/dashboard"]); 
      // localStorage.setItem("key", "value"); --- setItem can object or value into localstorage
    }
   }, (errResponse)=>{
    console.log(errResponse); 
    if(errResponse.error.type==1)
    {
      this.errorMsg = "This Username and Password is Incorrect !";
    }
    if(errResponse.error.type==2)
    {
      
      this.errorMsg = "This Password is Incorrect !"; 
    }
   })
  }

  

}
