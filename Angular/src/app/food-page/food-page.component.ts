//import { Food } from './../Food';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Food } from '../Food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodComponent implements OnInit {
 
 
  foods: Food[] = [];
  constructor(private foodService: FoodService, private route: ActivatedRoute) { 
     
    }

    ngOnInit(): void {
      this.route.params.subscribe(params => {
        if (params.searchTerm)
          this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
       else
          this.foods = this.foodService.getAll();
      })
    }
 
  
}
