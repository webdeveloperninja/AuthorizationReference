import { Component } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'auth-angular';

  constructor(private oauthService: OAuthService) {
    this.setup();
  }

  setup() {
    this.oauthService.configure({
      responseType: 'token id_token',
      logoutUrl: 'http://localhost:4200/',
      issuer: 'https://login.microsoftonline.com/robdir.onmicrosoft.com/',
      strictDiscoveryDocumentValidation: false,
      tokenEndpoint: 'https://login.microsoftonline.com/3040589c-8fcb-484f-a4b7-41a99dc4292c/oauth2/v2.0/token',
      loginUrl: 'https://login.microsoftonline.com/3040589c-8fcb-484f-a4b7-41a99dc4292c/oauth2/v2.0/authorize',
      redirectUri: 'http://localhost:4200/callback',
      clientId: 'e68c25e6-2d2e-453e-bd42-1c4c76bfd41b',
      dummyClientSecret: '<secret>',
      scope: '',
      skipIssuerCheck: true,
      oidc: true
    });
    this.oauthService.setStorage(sessionStorage);

    this.oauthService.tryLogin({});
  }

  logout() {
    this.oauthService.logOut();
  }
  login() {
    this.oauthService.initImplicitFlow();
  }

  public get name() {
    return 'yay';
  }
}
