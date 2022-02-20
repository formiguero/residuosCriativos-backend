import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  newData:any[]=[];

  constructor(public userService:UsersService) { }

  ngOnInit(): void {

    this.userService.getWasteRegistration().subscribe((response)=>{
      response.forEach(el=>{
        this.newData.push({name:el.name,description:el.description,sector:el.sector,type:el.type,phone:el.phone})
      });
      
    })
  }

}
