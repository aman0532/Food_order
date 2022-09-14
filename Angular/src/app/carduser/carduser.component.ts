import { CardService } from './../card.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Card } from '../card';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-carduser',
  templateUrl: './carduser.component.html',
  styleUrls: ['./carduser.component.css']
})
export class CarduserComponent implements OnInit {

  constructor(private cardservice:CardService) { }

  cardsArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();


  cards: Observable<Card[]>;
  card : Card=new Card();
  deleteMessage=false;
  cardlist:any;
  isupdated = false;    
 

  ngOnInit() {
    this.isupdated=false;
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };   
   this.cardservice.getusertList().subscribe(data =>{
    this.cards =data;
    this.dtTrigger.next();
    })
  }
  
  deleteCard(id: number) {
    this.cardservice.deleteCard(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage=true;
          this.cardservice.getusertList().subscribe(data =>{
            this.cards =data
            })
        },
        error => console.log(error));
  }


  updateCard(id: number){
    this.cardservice. getCarduser(id)
      .subscribe(
        data => {
          this.cardlist=data           
        },
        error => console.log(error));
  }

  cardupdateform=new FormGroup({
    card_id:new FormControl(),
    card_user:new FormControl(),
    card_email:new FormControl(),
    card_phone:new FormControl(),
    card_address:new FormControl(),
    card_date_time:new FormControl(),
    card_branch:new FormControl(),
    card_user_name:new FormControl(),
    card_new_number:new FormControl(),
    card_expaire:new FormControl(),
    card_cvv:new FormControl()
  });

  updateStu(updstu){
    this.card=new Card();   
    this.card.card_id=this.CardId.value;
    this.card.card_user=this.CardUser.value;
    this.card.card_email=this.CradEmail.value;
    this.card.card_phone=this.CardPhone.value;
    this.card.card_address=this.CardAddress.value;
    this.card.card_date_time=this.CardDateTime.value;
    this.card.card_branch=this.CardBranch.value;
    this.card.card_user_name=this.CardUserName.value;
    this.card.card_new_number=this.CardNewNumber.value;
    this.card.card_expaire=this.CardExpaire.value;
    this.card.card_cvv=this.CardCvv.value;

   console.log(this.CardBranch.value);
   

   this.cardservice.updateCard(this.card.card_id,this.card).subscribe(
    data => {     
      this.isupdated=true;
      this.cardservice.getusertList().subscribe(data =>{
        this.card =data
        })
    },
    error => console.log(error));
  }

  get CardUser(){
    return this.cardupdateform.get('card_user');
  }

  get CradEmail(){
    return this.cardupdateform.get('card_email');
  }

  get CardPhone(){
    return this.cardupdateform.get('card_phone');
  }

  get CardAddress(){
    return this.cardupdateform.get('card_address');
  }

  get CardDateTime(){
    return this.cardupdateform.get('card_date_time');
  }

  get CardBranch(){
    return this.cardupdateform.get('card_branch');
  }

  get CardUserName(){
    return this.cardupdateform.get('card_user_name');
  }

  get CardNewNumber(){
    return this.cardupdateform.get('card_new_number');

  }

  get CardExpaire(){
    return this.cardupdateform.get('card_expaire');
  }

  get CardCvv(){
    return this.cardupdateform.get('card_cvv');
  }
  get CardId()
  {
    return this.cardupdateform.get('card_id');

  }

  changeisUpdate(){
    this.isupdated=false;
  }

}
