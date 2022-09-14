
import { SlidebarComponent } from './slidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddcardComponent } from '../addcard/addcard.component';

import { SlidebarRoutingModule } from './slidebar-routing.module';

@NgModule({
  declarations: [
    SlidebarComponent,
    AddcardComponent,
  ],
  imports: [
    CommonModule,
    SlidebarRoutingModule
  ]
})
export class SlidebarModule { }
