import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(public userService:UsersService ) { }

  ngOnInit(): void {
    this.userService.userResetPassword={
      email:''
    }
  }

  ResetPassword(form:NgForm){
    this.userService.ResetPassword(form.value).subscribe((res:any)=>{
      console.log(res);
    })
  }
}
