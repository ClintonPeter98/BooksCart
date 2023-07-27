import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './core/dashbord/dashbord.component';
import { CartComponent } from './core/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { AppService } from './services/app.service';
import { DashboardService } from './services/dashboard.service';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { BookDetailsComponent } from './core/book-details/book-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    CartComponent,
    PageNotFoundComponent,
    BookDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AppService, DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
