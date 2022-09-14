import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-c-detail',
  templateUrl: './c-detail.component.html',
  styleUrls: ['./c-detail.component.css']
})
export class CDetailComponent implements OnInit {
  username: string = '';
  password: string= '';
  comp:string='1235678911';
  cards:Card[];
  submitted = false;
 searchvalue:string;

  constructor(private cardservice:CardService,private route:Router) { }

  ngOnInit() {
    this.submitted=false;
    this.cardservice.getusertList().subscribe(data =>{
      this.cards =data;
    })


  
  }
  goTopage(){
   
    if( this.username!==null)
      {
        if(this.password.length==this.comp.length)
        {
          alert("congratulation , you can see your details now");
          this.searchvalue=this.password;
          this.call();
        }
        else
        {
          alert("Wrong password");
          return ;
        }

      }else
      {
        alert("wrong name");
        return;
      }
     
  }
  call(){
    this.submitted=true;
  }
  addStudentForm(){
    this.submitted=false;
  }
}
