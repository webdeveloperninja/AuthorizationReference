import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://login.microsoftonline.com/3040589c-8fcb-484f-a4b7-41a99dc4292c/v2.0/.well-known/openid-configuration',
  redirectUri: window.location.origin + '/index.html',
  clientId: 'e68c25e6-2d2e-453e-bd42-1c4c76bfd41b',
  scope: 'openid profile email voucher'
};
