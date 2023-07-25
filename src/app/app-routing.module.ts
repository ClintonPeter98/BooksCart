import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './core/dashbord/dashbord.component';
import { CartComponent } from './core/cart/cart.component';

const routes: Routes = [
  {path: 'dashboard', component: DashbordComponent},
  {path: 'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
