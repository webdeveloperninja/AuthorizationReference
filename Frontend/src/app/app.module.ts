import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OAuthModule, DefaultOAuthInterceptor, OAuthModuleConfig } from 'angular-oauth2-oidc';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ViewTodosComponent } from './view-todos/view-todos.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [AppComponent, ViewTodosComponent],
  imports: [
    AuthModule,
    HttpClientModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['https://jsonplaceholder.typicode.com'],
        sendAccessToken: true
      }
    }),
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
