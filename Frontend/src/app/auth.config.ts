import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'https://login.microsoftonline.com/3040589c-8fcb-484f-a4b7-41a99dc4292c/v2.0/.well-known/openid-configuration',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/index.html',

  // The SPA's id. The SPA is registered with this id at the auth-server
  clientId: 'e68c25e6-2d2e-453e-bd42-1c4c76bfd41b',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid profile email voucher'
};
