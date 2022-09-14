import { CardDetailComponent } from './card-detail/card-detail.component';
import { HelpComponent } from './help/help.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarduserComponent } from './carduser/carduser.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcardComponent } from './addcard/addcard.component';
import { SearchComponent } from './search/search.component';
import { AccountComponent } from './account/account.component';
import { FoodComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodShowComponent } from './food-show/food-show.component';
import { CDetailComponent } from './c-detail/c-detail.component';
import { SuccessComponent } from './success/success.component';


const routes: Routes = [

 // {path: '', redirectTo: 'navbar', pathMatch: 'full'},
  {path: '', redirectTo: 'food-page', pathMatch: 'full'},
 { path: 'navbar', component: NavbarComponent},
  { path: 'slidebar', component: SlidebarComponent },
  { path: 'addcard', component: AddcardComponent},
// { path: 'addproduct', component: AddproductComponent
   
  // },
   //{ path: 'search', component: SearchComponent},
   {path:'search/:searchTerm', component:FoodComponent},

  { path: 'carduser', component: CarduserComponent},
  { path: 'success', component: SuccessComponent},
  { path: 'account', component: AccountComponent},
  { path: 'help', component: HelpComponent},
 
  { path: 'cart-page', component:CartPageComponent},
 
 {path:'food-show', component:FoodShowComponent},
 { path: 'c-detail', component: CDetailComponent},
 { path: 'card-detail',component: CardDetailComponent},
 { path: 'food-page', component:FoodComponent},
 {path:'food/:id', component:FoodShowComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
