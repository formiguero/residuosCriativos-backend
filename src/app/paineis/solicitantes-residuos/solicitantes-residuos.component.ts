import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/users.service';
import { PopUpDeleteComponent } from './pop-up-delete/pop-up-delete.component';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-solicitantes-residuos',
  templateUrl: './solicitantes-residuos.component.html',
  styleUrls: ['./solicitantes-residuos.component.css']
})
export class SolicitantesResiduosComponent implements OnInit {
  displayedColumns: string[] = ['CustomerName', 'CustomerCpf', 'ProductName', 'Description','actions'];
  dataSource :MatTableDataSource<any>;
  customerData:any[]=[];
  

  constructor(private router:Router,public userService:UsersService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userService.getCustomers().subscribe((response:any)=>{
   
      response.forEach(element => {
        if(element.data.SupplierCnpj===localStorage.getItem('cnpj'))
        this.customerData.push({id:element.id,CustomerName:element.data.CustomerName,CustomerCpf:element.data.CustomerCpf,ProductName:element.data.ProductName,Description:element.data.Description,Selected:element.data.Selected})
      });
      this.dataSource=new MatTableDataSource(this.customerData);
    })
  }

  Logout(){
    this.userService.Logout();
  }

  openDialog(id:string) {
    const dialogRef = this.dialog.open(PopUpDeleteComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.Delete(id);
      }
    });
  }

  

  Delete(id:any){
    this.userService.deleteCustomer(id).subscribe((res:any)=>{
      window.alert(res.message)
    })
  }

  Confirm(id:any){
    this.customerData.forEach((element:any)=>{
      if(id==element.id){
        element.Selected=!element.Selected;
        this.userService.updateCustomerSelected(id).subscribe((res)=>{
          console.log(res);
        });
      }
    })
  }


}
