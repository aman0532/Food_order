import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Food } from '../Food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-show',
  templateUrl: './food-show.component.html',
  styleUrls: ['./food-show.component.css']
})
export class FoodShowComponent implements OnInit {

  food!: Food;
  
  constructor(private activatedRoute:ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private router: Router) { 
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.food = foodService.getFoodById(params.id);
    })

  }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
  goback()
  {
    this.router.navigateByUrl('/food-page');
  }

}
