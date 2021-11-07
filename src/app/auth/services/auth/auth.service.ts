import { Injectable } from '@angular/core';
import { AlertService } from 'src/app/shared/alerts/services/alert.service';
import { AuthApi } from '../../api/auth.api';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean = true;

  constructor(
    private api: AuthApi,
    private tokenService: TokenService,
    private alertService: AlertService
  ) {}

  get alert(){
    return this.alertService.alert;
  }

  clearAlert(){
    this.alertService.clear();
  }

  login(loginForm: any){
    this.api.getCookie().subscribe(
      () => {
        this.api.login(loginForm).subscribe(
          res => {
            console.log('resposta', res)
            this.tokenService.token = res.user.token;
            this.isAuthenticated = true;
          },
          error => {
            this.alertService.add({ class: 'alert-danger', message: error.error.message });
          }
        );
      }
    );
  }

  logout(){
    this.api.logout().subscribe(
      res => {
        console.log(res.message)
      }
    );
  }

  register(registerForm: any){
    return this.api.register(registerForm).subscribe(
      res => {
        this.alertService.add({ class: 'alert-success', message: res.message });
      },
      error => {
        this.alertService.add({ class: 'alert-danger', message: error.error.message });
      }
    )
  }

  forgotPassword(forgotPasswordForm: any){
    return this.api.forgotPassword(forgotPasswordForm).subscribe(
      res => {
        this.alertService.add({ class: 'alert-success', message: res.message });
      },
      error => {
        this.alertService.add({ class: 'alert-danger', message: error.error.message });
      }
    )
  }

}
