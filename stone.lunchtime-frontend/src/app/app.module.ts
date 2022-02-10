import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './public/layouts/header/header.component';
import { FooterComponent } from './public/layouts/footer/footer.component';
import { HomeComponent } from './public/pages/home/home.component';
import { ListLunchComponent } from './public/pages/list-lunch/list-lunch.component';
import { CartComponent } from './public/pages/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListLunchComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
