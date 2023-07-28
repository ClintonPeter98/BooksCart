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
import { ProductListComponent } from './core/product-list/product-list.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    CartComponent,
    PageNotFoundComponent,
    BookDetailsComponent,
    ProductListComponent,
    HighlightDirective,
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
