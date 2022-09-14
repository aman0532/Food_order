import { CartPageComponent } from './../cart-page/cart-page.component';
import { CardDetailComponent } from './../card-detail/card-detail.component';
import { AddcardComponent } from './../addcard/addcard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { CarduserComponent } from '../carduser/carduser.component';
import { AccountComponent } from '../account/account.component';
import { HelpComponent } from '../help/help.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent},
  { path: 'addcard', component: AddcardComponent},
  { path: 'carduser', component: CarduserComponent},
  { path: 'account', component: AccountComponent},
  { path: 'help', component: HelpComponent},
  { path: 'card-detail', component: CardDetailComponent},
  {path:'cart-page',component:CartPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavbarRoutingModule { }
