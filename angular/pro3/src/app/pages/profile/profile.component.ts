import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private _user : UserService) {
    this._user.userInfo().subscribe((data)=>{
      console.log("-----", data);  
    })
   }

  ngOnInit() {
  }

}
