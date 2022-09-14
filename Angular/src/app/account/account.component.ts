import { Component, OnInit } from '@angular/core';
import { allocExpando } from '@angular/core/src/render3/instructions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  

  constructor(private router:Router) { }
  username: string = '';
  password: string= '';
  ngOnInit() {
  }

  goTopage():void{
   
    if( this.username=="Admin" || this.username=="admin" || this.username=="ADMIN")
      {
        if(this.password=="Admin" || this.password=="admin" || this.password=="ADMIN")
        {
          alert("Congratulations!, You have admin login access now");
          this.show();

        }
        else
        {
          alert("Please enter  the correct password");
        }

      }else
      {
        alert("Please enter the correct name");
      }
     
  }
  show():void{
    this.router.navigate([`/carduser`]);
  }

}
