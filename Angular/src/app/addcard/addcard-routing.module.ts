import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from '../addproduct/addproduct.component';

const routes: Routes = [
  { path: 'addproduct', component: AddproductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddcardRoutingModule { }
