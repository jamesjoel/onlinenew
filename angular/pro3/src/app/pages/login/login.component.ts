import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMsg;
  user={
    username : "",
    password : ""
  }
  constructor(private _loginService : LoginService) { }

  ngOnInit() {
  }
  login(){
   this._loginService.doLogin(this.user).subscribe((data)=>{
    console.log(data); 
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
