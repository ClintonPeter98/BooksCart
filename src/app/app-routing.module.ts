import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './core/dashbord/dashbord.component';
import { CartComponent } from './core/cart/cart.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { BookDetailsComponent } from './core/book-details/book-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashbordComponent},
  {path: 'cart', component: CartComponent},
  {path: 'book-details/:id', component: BookDetailsComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
