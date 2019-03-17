import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HelpComponent } from './components/help/help.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { GoogleAnaEventTrackService } from './services/ga-event-tracking.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelpComponent,
    ContactUsComponent,
    ProductListComponent,
    PageNotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  // providers: [ Title, GoogleAnaEventTrackService ],
  providers: [ Title ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  // constructor(protected _googleAna: GoogleAnaEventTrackService) {}
  constructor() {}
}
