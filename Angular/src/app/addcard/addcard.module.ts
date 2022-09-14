import { AddproductComponent } from './../addproduct/addproduct.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddcardRoutingModule } from './addcard-routing.module';
import { AddcardComponent } from './addcard.component';

@NgModule({
  declarations: [
    AddcardComponent,
    AddproductComponent,
  
  ],
  imports: [
    CommonModule,
    AddcardRoutingModule,
    
  ]
})
export class AddcardModule { }
