import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/shared/users.service';

import { AngularFireStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-cadastro-residuos',
  templateUrl: './cadastro-residuos.component.html',
  styleUrls: ['./cadastro-residuos.component.css']
})
export class CadastroResiduosComponent implements OnInit {

  pathImage:string;

  constructor(public userService:UsersService,private FirebaseStorage:AngularFireStorage) { }

  ngOnInit(): void {
    
    this.userService.userWaste={
      cnpj:localStorage.getItem('cnpj'),
      phone:'',
      name:'',
      type:[],
      sector:[],
      imagePath:'',
      description:''
    }
  }

    onSubmit(form:NgForm){
      this.userService.postWaste(form.value).subscribe(res=>{
       

       
      });

      this.FirebaseStorage.upload(`/WasteImage-Name:${this.userService.userWaste.name}-Description:${this.userService.userWaste.description}`,this.pathImage);
      
    }

    GetStats(event:Event){

      this.userService.userWaste.type.push((<HTMLInputElement>event.target).value)
     
    }

    GetStatsSector(event:Event){
      this.userService.userWaste.sector.push((<HTMLInputElement>event.target).value)
    }

    upload($event){
      this.pathImage=$event.target.files[0];
      
    }

    Logout(){
      this.userService.Logout();
    }

   

}
