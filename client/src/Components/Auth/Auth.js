import auth0 from 'auth0-js';

class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      // the following three lines MUST be updated
      domain: 'notes-patrol.auth0.com',
      clientID: 'j8NIPMoCzmxH46EbMiuyIdr0DUbnDkDm',
      redirectUri: 'http://localhost:3001/callback',
      responseType: 'token id_token',
      scope: 'openid'
    });

    this.getProfile = this.getProfile.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  getProfile() {
    return this.profile;
  }

  getIdToken() {
    return this.idToken;
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err);
        if (!authResult || !authResult.idToken) {
          return reject(err);
        }
        this.setSession(authResult);
        resolve();
      });
    })
  }

  isAuthenticated() {
    return new Date().getTime() < this.expiresAt;
  }

  setSession(authResult, step) {
    this.idToken = authResult.idToken;
    this.profile = authResult.idTokenPayload;
    // set the time that the id token will expire at
    this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
  }

  signIn() {
    this.auth0.authorize();
  }

  signOut() {
    this.auth0.logout({
      returnTo: 'http://localhost:3000',
      clientID: 'PVafIu9Q5QN65DiPByAFvCCJryY7n432',
    });
  }

  silentAuth() {
    return new Promise((resolve, reject) => {
      this.auth0.checkSession({}, (err, authResult) => {
        if (err) return reject(err);
        this.setSession(authResult);
        resolve();
      });
    });
  }
}

const auth0Client = new Auth();

export default auth0Client;


// export default class Auth {

//   auht0 = new auth0.WebAuth({
//     domain: 'notes-patrol.auth0.com',
//     clientID: 'j8NIPMoCzmxH46EbMiuyIdr0DUbnDkDm',
//     redirectUri: 'http://localhost:3001/callback',
//     responseType: 'token id_token',
//     scope: 'openid'
//   });

//   constructor() {


//     this.login = this.login.bind(this);
//     this.logout = this.logout.bind(this);
//     this.handleAuthentication = this.handleAuthentication.bind(this);
//     this.isAuthenticated = this.isAuthenticated.bind(this);
//   }

//   login() {
//     this.auht0.authorize();
//   }

//   handleAuthentication() {
//     return new Promise((resolve, reject) => {
//       this.auth0.parseHash((err, authResult) => {
//         if (err) return reject(err);
//         console.log(authResult);
//         if (!authResult || !authResult.idToken) {
//           return reject(err);
//         }
//         this.setSession(authResult);
//         resolve();
//       });
//     })
//   }

//   // handleAuthentication() {
//   //   console.log("AUTH0", this)
//   //   this.auth0.parseHash((err, authResult) => {
//   //     if (authResult && authResult.accessToken && authResult.idToken) {
//   //       console.log("AUTH RESULT", authResult)
//   //       this.setSession(authResult);
//   //       return;
//   //     } else if (err) {
//   //       console.log("ERROR", err)
//   //       throw err;
//   //     }
//   //   });
//   // }

//   setSession(authResult) {
//     // Set the time that the Access Token will expire at
//     console.log("in Session")
//     let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
//     localStorage.setItem('access_token', authResult.accessToken);
//     localStorage.setItem('id_token', authResult.idToken);
//     localStorage.setItem('expires_at', expiresAt);
//   }

//   logout = () => {
//     // Clear Access Token and ID Token from local storage
//     localStorage.removeItem('access_token');
//     localStorage.removeItem('id_token');
//     localStorage.removeItem('expires_at');
//   }

//   isAuthenticated = () => {
//     // Check whether the current time is past the 
//     // Access Token's expiry time
//     let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
//     return new Date().getTime() < expiresAt;
//   }
// }