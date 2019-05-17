
import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent }  from './app.component';
import { HomeComponent } from './app.home';
import { DetailComponent } from './app.detail';
import { routing }       from './app.routing';
import { AppHeaderComponent } from './shared/app.header.component';
import { AppFooterComponent } from './shared/app.footer.component';
import { AppAbout } from './app.about';
import { FormsModule } from '@angular/forms';
import { ConvertDollarsPipe }           from './app.convertDollars.pipe';
import { MyCurrencyService } from './app.currency.services';
import { CurrencyComponent } from './shared/app.currency.component';

@NgModule({
  declarations: [
    AppComponent, DetailComponent, HomeComponent, AppHeaderComponent, AppFooterComponent,  AppAbout, ConvertDollarsPipe, CurrencyComponent 
  ],
  imports: [
    BrowserModule, HttpClientModule, routing, FormsModule
  ],
  providers: [MyCurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
