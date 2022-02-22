import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerModel } from './customer.model';
import { LoginModel } from './login.model';
import { NewPasswordModel } from './NewPassword.mode';
import { ResetPasswordModel } from './resetPassword.model';
import { PessoaFisicaModel } from './userPessoaFisica.model';
import { PessoaJuridicaModel } from './userPessoaJuridica';
import { WasteModel } from './waste.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userPessoaFisica:PessoaFisicaModel;
  userPessoaJuridica:PessoaJuridicaModel;
  userWaste:WasteModel;
  userDataLogin:LoginModel;
  userResetPassword:ResetPasswordModel;
  userNewPassword:NewPasswordModel;
  
  tokenNewPassword:string;
  emailNewPassword:string;

  readonly URL='/';  
  
  
  constructor(private http:HttpClient,private router:Router) { }

  /* Post Requests*/

  postuserPessoaFisica(userPessoaFisica:PessoaFisicaModel){
    return this.http.post(this.URL + "registration",userPessoaFisica);

  }

  postuserPessoaJuridica(userPessoaJuridica:PessoaJuridicaModel){
    return this.http.post(this.URL +"registration",userPessoaJuridica);
  }

  postWaste(userWaste:WasteModel){
    return this.http.post(this.URL +"waste",userWaste);
  }

  postCustomer(customer:CustomerModel){
    return this.http.post(this.URL+"customers",customer);

  }

  UserLogin(UserData:LoginModel){
    return this.http.post(this.URL+'login',UserData);
  }

  ResetPassword(Email:ResetPasswordModel){
    return this.http.post(this.URL+"reset-password",Email);
  }

  NewPassword(NewPassword:NewPasswordModel){
    return this.http.post(this.URL + `reset-password/${this.emailNewPassword}/${this.tokenNewPassword}`,NewPassword);
  }


  /*Get Requests*/

  getWasteRegistration(){
    return this.http.get<Array<WasteModel>>(this.URL+"waste")
  }

  getUser(){
    return this.http.get(this.URL + 'registration')
  }

  getCustomers(){
    return this.http.get(this.URL +"customers");
  }

  /*Delete Request*/

  deleteCustomer(id:string){
    return this.http.delete(this.URL+`customers/${id}`);
  }

  /*Update Request*/

  updateCustomerSelected(id:string){
    return this.http.put(this.URL+`customers/${id}`,id);
  }

  /*Authentication*/ 

  getAcessToken(){
    return localStorage.getItem('token');
  }

  getisLoggedIn():boolean{
    let authToken=localStorage.getItem('token');
    return (authToken !==null) ? true :false;
  }

  Logout(){
    localStorage.removeItem('email');
    localStorage.removeItem('cnpj');
    localStorage.removeItem('cpf');
    if(localStorage.removeItem('token')==null){
      this.router.navigate(['/']);
    }
  }


  

  
}
