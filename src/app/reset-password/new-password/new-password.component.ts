import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {

  constructor(public userService:UsersService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.userNewPassword={
      newPassword:'',
      confirmPassword:''
    }

    this.userService.tokenNewPassword=this.route.snapshot.paramMap.get('token');
    this.userService.emailNewPassword=this.route.snapshot.paramMap.get('email');
  }

  NewPassword(form:NgForm){
    this.userService.NewPassword(form.value).subscribe((res:any)=>{
      console.log(res);
    })
  }

}
