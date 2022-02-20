import { Component, NgZone, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CustomerModel } from 'src/app/shared/customer.model';
import { UsersService } from 'src/app/shared/users.service';
import { PopUpComponent } from './pop-up/pop-up.component';




@Component({
  selector: 'app-painel-pessoa-fisica',
  templateUrl: './painel-pessoa-fisica.component.html',
  styleUrls: ['./painel-pessoa-fisica.component.css']
})
export class PainelPessoaFisicaComponent implements OnInit {

  constructor(public userService:UsersService,public dialog: MatDialog,private router:Router,private zone:NgZone) { }
  displayedColumns: string[] = ['name','description','sector','type','actions'];
  newData:any[]=[];
  dataSource:MatTableDataSource<any>;
  customerData:CustomerModel;
  changePage:boolean=false;
  ngOnInit(): void {

    this.userService.getWasteRegistration().subscribe((response)=>{
      response.forEach((el:any)=>{
        this.newData.push({cnpj:el.data.cnpj,name:el.data.name,description:el.data.description,sector:el.data.sector,type:el.data.type,phone:el.data.phone})
      });
      this.dataSource=new MatTableDataSource(this.newData);
    })
  }

  Logout(){
    this.userService.Logout();
  }

  openDialog(element:any) {
    const dialogRef = this.dialog.open(PopUpComponent);
    console.log(element);
    
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
     if(result){
       this.customerData={
         CustomerName:localStorage.getItem('name'),
         CustomerCpf:localStorage.getItem('cpf'),
         SupplierCnpj:element.cnpj,
         ProductName:element.name,
         Description:element.description,
         Sector:element.sector,
         Type:element.type,
         Selected:false
       }
      
       this.userService.postCustomer(this.customerData).subscribe((res)=>{
         
      });

      setTimeout(()=>{
        window.location.href=`https://api.whatsapp.com/send?phone=55${element.phone}`;
      },1200)



       
       
      }
    });
  }

 
}
