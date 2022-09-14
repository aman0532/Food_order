import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  constructor(private router:Router) { 
   // this.value=this.password;
  }
  username: string = '';
  password: string= '';
  value: string='';
  ngOnInit() {
   
  }

  goTopage():void{
   
    if( this.username!=null)
      {
        if(this.password!=null)
        {
          alert(" you can access your details now ");
          this.show();

        }
        else
        {
          alert("Wrong password");
        }

      }else
      {
        alert("wrong name");
      }
     
  }
  show():void{
    this.router.navigate([`/c-detail`]);
  }

}
