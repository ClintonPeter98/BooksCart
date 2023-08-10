import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './core/dashbord/dashbord.component';
import { CartComponent } from './core/cart/cart.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { BookDetailsComponent } from './core/book-details/book-details.component';
import { MainComponent } from './layouts/main/main.component';
import { ContactUsComponent } from './core/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'dashboard', component: DashbordComponent },
  { path: 'cart', component: CartComponent },
  { path: 'book-details/:id', component: BookDetailsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  {
    path: 'main',
    loadChildren: () => import('./layouts/layout/layout.module').then(m => m.LayoutModule)
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
