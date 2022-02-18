import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/users.service';


@Component({
  selector: 'app-painel-pessoa-juridica',
  templateUrl: './painel-pessoa-juridica.component.html',
  styleUrls: ['./painel-pessoa-juridica.component.css']
})
export class PainelPessoaJuridicaComponent implements OnInit {

  displayedColumns: string[] = ['name','description','sector','type'];
  newData:any[]=[];
  dataSource:MatTableDataSource<any>
  constructor(private router:Router,public userService:UsersService) { }

  ngOnInit(): void {
    this.userService.getWasteRegistration().subscribe((response)=>{
      response.forEach((el:any)=>{
        if(el.data.cnpj===localStorage.getItem('cnpj')){
          this.newData.push({id:el.id,name:el.data.name,description:el.data.description,sector:el.data.sector,type:el.data.type});
        }
      })
      this.dataSource=new MatTableDataSource(this.newData);
    })
  }

  RedirectNewPage(){
    this.router.navigate(['/cadastro-residuos'])
  }

  Logout(){
    this.userService.Logout();
  }

}
