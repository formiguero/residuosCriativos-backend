import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-cadastro-pessoa-fisica',
  templateUrl: './cadastro-pessoa-fisica.component.html',
  styleUrls: ['./cadastro-pessoa-fisica.component.css']
})
export class CadastroPessoaFisicaComponent implements OnInit {

  constructor(public userService:UsersService,private router:Router) { }

  ngOnInit(): void {
    this.userService.userPessoaFisica={
      name:'',
      CPF:'',
      address:'',
      city:'',
      state:'',
      phone:'',
      email:'',
      password:'',
    }
  }

  onSubmit(form:NgForm){
    this.userService.postuserPessoaFisica(form.value).subscribe((res)=>{
      this.router.navigate(['/']);
    })
  }

}
