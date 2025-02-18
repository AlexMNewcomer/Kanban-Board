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
    // TODO: 
    const decoded = jwtDecode<JwtPayload>(token);
    if (decoded.exp) {
      const currentTime = Date.now() / 1000;
      return decoded.exp < currentTime;
    }
    return false;
  }

  getToken(): string {
    // TODO: return the token
    return localStorage.getItem('id_token') || '';
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
    // TODO: redirect to the home page
    window.location.assign('/');
  }

  logout() {
    // TODO: 
    localStorage.removeItem('id_token');
    // TODO: redirect to the login page
    window.location.assign('/login');
  }
}

export default new AuthService();
