import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HelpComponent } from './components/help/help.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { GoogleAnaEventTrackService } from './services/ga-event-tracking.service';

import { AppConfig } from './app.config';
import { HttpClientModule } from '@angular/common/http';
import { AccordComponent } from './components/accord/accord.component';
import { SpringcarComponent } from './components/springcar/springcar.component';
import { SpringService } from './services/spring.service';

// APP_INITIALIZER: before app initialise, load external configuration
export function BeforeInitApp(appInitService: AppConfig) {
  return (): Promise<any> => { 
    return appInitService.load();
  }
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelpComponent,
    ContactUsComponent,
    ProductListComponent,
    PageNotFoundComponent,
    NavbarComponent,
    AccordComponent,
    SpringcarComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule
  ],
  providers: [ Title, GoogleAnaEventTrackService, AppConfig, SpringService,
    { provide: APP_INITIALIZER, useFactory: BeforeInitApp, deps: [AppConfig], multi: true }],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule {

  constructor() { }
}
