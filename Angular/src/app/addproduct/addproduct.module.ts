import { FoodShowComponent } from './../food-show/food-show.component';
import { CartPageComponent } from './../cart-page/cart-page.component';
import { FoodComponent } from './../food-page/food-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddproductComponent } from './addproduct.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidebarComponent } from '../slidebar/slidebar.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { AddproductRoutingModule } from './addproduct-routing.module';



@NgModule({
  declarations: [
    AddproductComponent,
    SlidebarComponent,
    FoodComponent,
    CartPageComponent,
    FoodShowComponent,
  ],
  imports: [
   
    FormsModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    AddproductRoutingModule,
  
  ]
})
export class AddproductModule { }
