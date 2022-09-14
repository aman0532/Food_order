import { Product } from '../addproduct';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from '../card.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FoodService } from '../food.service';
import { CartService } from '../cart.service';



@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  
  
  

  constructor (private cardservice:CardService,private router:Router,private activatedRoute:ActivatedRoute,
    
){
  
}
  //productsaveform!:FormGroup
  product: Product=new Product();
  submitted = false;

 

  /*goTopage():void{
    this.router.navigate([`/addcard`]);
  } */
 

  ngOnInit(){
    this.submitted = false;
    /*this.productsaveform=new FormGroup({
      product_name:new FormControl('' , [Validators.required , Validators.minLength(3) ] ),
      product_price:new FormControl( ),
      product_total_price:new FormControl( ),
    });*/
}


}

 


