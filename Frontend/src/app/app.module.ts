import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OAuthModule } from 'angular-oauth2-oidc';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule, OAuthModule.forRoot(), BrowserModule, AppRoutingModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
