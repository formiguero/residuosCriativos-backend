import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-cadastro-pessoa-juridica',
  templateUrl: './cadastro-pessoa-juridica.component.html',
  styleUrls: ['./cadastro-pessoa-juridica.component.css']
})
export class CadastroPessoaJuridicaComponent implements OnInit {

  constructor(public userService:UsersService,private router:Router) { }

  ngOnInit(): void {
    this.userService.userPessoaJuridica={
      social:'',
      name:'',
      businessCategory:'',
      CNPJ:'',
      address:'',
      city:'',
      state:'',
      phone:0,
      email:'',
      password:''
    }
  }

  onSubmit(form:NgForm){
    this.userService.postuserPessoaJuridica(form.value).subscribe((res)=>{
      this.router.navigate(['/']);
    })
  }

}
