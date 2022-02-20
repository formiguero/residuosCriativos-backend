import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public UserService:UsersService,private router:Router) { }

  ngOnInit(): void {
    this.UserService.userDataLogin={
      email:'',
      password:''
    }
  }

  Login(form:NgForm){
    this.UserService.UserLogin(form.value).subscribe((res:any)=>{
      console.log(res);
      localStorage.setItem('token',res.token);

      if(res.cpf){
        localStorage.setItem('email',res.email);
        localStorage.setItem('cpf',res.cpf);
        localStorage.setItem('name',res.name);
        this.router.navigate(['/painel-pessoa-fisica']);
      }

      if(res.cnpj){
        localStorage.setItem('email',res.email);
        localStorage.setItem('cnpj',res.cnpj);
        this.router.navigate(['/painel-pessoa-juridica']);
      }
      
    })
  }

}
