import { AddproductComponent } from './../addproduct/addproduct.component';
import { AddcardComponent } from './../addcard/addcard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [ 
  { path: 'addcard', component: AddcardComponent},
  { path: 'addproduct', component: AddproductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlidebarRoutingModule { }
