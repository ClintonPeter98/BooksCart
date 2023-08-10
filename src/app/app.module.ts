import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './core/dashbord/dashbord.component';
import { CartComponent } from './core/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppService } from './services/app.service';
import { DashboardService } from './services/dashboard.service';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { BookDetailsComponent } from './core/book-details/book-details.component';
import { ProductListComponent } from './core/product-list/product-list.component';
import { HighlightDirective } from './directives/highlight.directive';
import { NumberToStringPipe } from './pipes/number-to-string.pipe';
import { MomentDatePipe } from './pipes/moment-date.pipe';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './layouts/header/header.component';
import { BodyComponent } from './layouts/body/body.component';
import { MainComponent } from './layouts/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { ContactUsComponent } from './core/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    CartComponent,
    PageNotFoundComponent,
    BookDetailsComponent,
    ProductListComponent,
    HighlightDirective,
    NumberToStringPipe,
    MomentDatePipe,
    HeaderComponent,
    BodyComponent,
    MainComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [AppService, DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
