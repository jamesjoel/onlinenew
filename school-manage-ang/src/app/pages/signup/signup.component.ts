import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  teacher  = {
    full_name : "",
    username : "",
    password : ""
  }
  constructor(private _teacher : TeacherService) { }

  ngOnInit() {
  }
  signup(){
    this._teacher.insert(this.teacher).subscribe((data)=>{
      console.log(data); 
    })
  }

}
