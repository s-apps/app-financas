import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthApi {

  constructor(
    private http: HttpClient
  ){}

  login(loginForm: any): Observable<User>{
    return this.http.post<User>('http://localhost:8000/api/auth/login', loginForm);
  }

  register(registerForm: any): Observable<any>{
    return this.http.post<User>('http://localhost:8000/api/auth/register', registerForm);
  }

  forgotPassword(forgotPasswordForm: any): Observable<any>{
    return this.http.post<any>('http://localhost:8000/api/auth/forgot-password', forgotPasswordForm);
  }

}
