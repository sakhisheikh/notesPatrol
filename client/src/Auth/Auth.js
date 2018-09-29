import auth0 from 'auth0-js';

export default class Auth {
  auht0 = new auth0.WebAuth({
    domain: 'notes-patrol.auth0.com',
    clientID: 'j8NIPMoCzmxH46EbMiuyIdr0DUbnDkDm',
    redirectUri: 'http://localhost:3001/callback',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auht0.authorize();
  }
}