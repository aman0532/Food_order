import { CartPageComponent } from './../cart-page/cart-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodComponent } from '../food-page/food-page.component';
import { SlidebarComponent } from '../slidebar/slidebar.component';
import { AddproductComponent } from './addproduct.component';
import { FoodShowComponent } from '../food-show/food-show.component';
import { HelpComponent } from '../help/help.component';

const routes: Routes = [
  {path:'', component:HelpComponent},
   { path: 'food-page', component:FoodComponent},
   //{path:'food-show', component:FoodShowComponent},
    {path:'food/:id', component:FoodShowComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddproductRoutingModule { }
