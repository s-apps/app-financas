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

}
