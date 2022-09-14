import { CardDetailComponent } from './../card-detail/card-detail.component';
import { HelpComponent } from './../help/help.component';
import { CarduserComponent } from './../carduser/carduser.component';
import { AddcardComponent } from './../addcard/addcard.component';
import { SearchComponent } from './../search/search.component';
import { NavbarComponent } from './navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';

@NgModule({
  declarations: [
    NavbarComponent,
    SearchComponent,
    CarduserComponent,
    AddcardComponent,
    HelpComponent,
    CardDetailComponent
  ],
  imports: [
    CommonModule,
    NavbarRoutingModule
  ]
})
export class NavbarModule { }
