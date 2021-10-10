import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AlertService } from "../shared/alerts/services/alert.service";
import { AuthApi } from "./api/auth.api";

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {

  constructor(
    private api: AuthApi,
    private router: Router,
    private alertService: AlertService
  ){}

  get alert(){
    return this.alertService.alert;
  }

  clearAlert(){
    this.alertService.clear();
  }

  login(loginForm: any){
    return this.api.login(loginForm).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: error => {
        this.alertService.add({ class: 'alert-danger', message: error.error.message });
      }
    });
  }

  async register(registerForm: any){
    return this.api.register(registerForm).subscribe({
      next: res => {
        this.alertService.add({ class: 'alert-success', message: res.message });
      },
      error: error => {
        this.alertService.add({ class: 'alert-danger', message: error.error.message });
      }
    })
  }

  forgotPassword(forgotPasswordForm: any){
    return this.api.forgotPassword(forgotPasswordForm).subscribe({
      next: res => {
        this.alertService.add({ class: 'alert-success', message: res.message });
      },
      error: error => {
        this.alertService.add({ class: 'alert-danger', message: error.error.message });
      }
    })
  }

}
