import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { User } from "../models/user";

export interface AuthResponseData {
  user: {
    id: number,
    name: string,
    email: string,
    level: string,
    token: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthApi {

  constructor(
    private http: HttpClient
  ){}

  getCookie() {
    return this.http.get('http://localhost:8000/api/csrf-cookie', { withCredentials: true });
  }

  getUser(): Observable<any>{
    return this.http.get<any>('http://localhost:8000/api/user');
  }

  login(loginForm: any): Observable<AuthResponseData>{
    return this.http.post<AuthResponseData>('http://localhost:8000/api/auth/login', loginForm);
  }

  logout(): Observable<any> {
    return this.http.get('http://localhost:8000/api/auth/logout');
  }

  register(registerForm: any): Observable<any>{
    return this.http.post<AuthResponseData>('http://localhost:8000/api/auth/register', registerForm);
  }

  forgotPassword(forgotPasswordForm: any): Observable<any>{
    return this.http.post<any>('http://localhost:8000/api/auth/forgot-password', forgotPasswordForm);
  }

}
