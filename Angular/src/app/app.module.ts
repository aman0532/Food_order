import { AddproductComponent } from './addproduct/addproduct.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarduserComponent } from './carduser/carduser.component';
import { SearchComponent } from './search/search.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {DataTablesModule} from 'angular-datatables';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { AddcardComponent } from './addcard/addcard.component';
import { AccountComponent } from './account/account.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelpComponent } from './help/help.component';
import { FoodComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodShowComponent } from './food-show/food-show.component';
import { AddproductModule } from './addproduct/addproduct.module';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CDetailComponent } from './c-detail/c-detail.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import { ShowCardComponent } from './show-card/show-card.component';
import { SuccessComponent } from './success/success.component';



@NgModule({
  declarations: [
    AppComponent,
    SlidebarComponent,
    SearchComponent,
    CarduserComponent,
    AccountComponent,
    NavbarComponent,
    AddcardComponent,
    AddproductComponent,
    HelpComponent,
    FoodComponent,
    CartPageComponent,
    FoodShowComponent,
    CardDetailComponent,
    CDetailComponent,
    SearchfilterPipe,
    ShowCardComponent,
    SuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
