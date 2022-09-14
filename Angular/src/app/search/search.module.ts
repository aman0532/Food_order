import { SearchComponent } from './search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { AddcardComponent } from '../addcard/addcard.component';

@NgModule({
  declarations: [
    SearchComponent,
    AddcardComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
