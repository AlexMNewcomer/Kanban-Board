import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    const token = this.getToken();
    return token ? jwtDecode<JwtPayload>(token) : null;
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }
  
  isTokenExpired(token: string) {
    // Decode the token to get its expiration time
    const decoded = jwtDecode<JwtPayload>(token);
    // Check if the token is expired
    if (decoded.exp) {
      return decoded.exp < Date.now() / 1000;
    }
    return false;
  }

  getToken(): string {
    // TODO: return the token
    return localStorage.getItem('id_token') || '';
  }

  login(idToken: string) {
    console.log("Logging in, token:", idToken);
    localStorage.setItem("id_token", idToken);
    console.log("Token saved:", localStorage.getItem("id_token")); // Check if token is stored
    window.location.assign("/"); // Redirect
  }  

  logout() {
    // TODO: remove the token from localStorage
    localStorage.removeItem('id_token');
    window.location.assign('/login');
    // TODO: redirect to the login page
    window.location.assign('/login');
  }
}

export default new AuthService();
