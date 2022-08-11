import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PricesComponent } from './components/prices/prices.component';
import { HomeComponent } from './components/home/home.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PricesComponent,
    HomeComponent,
    ProtectedComponent,
    AuthButtonComponent,
    CallbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    // AuthModule.forRoot({
    //   domain: 'dev-tachi-7inc.us.auth0.com',
    //   clientId: 'vfOKku3L3x91U33yboYWT7VUsqhHyFJS'
    // }),
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
