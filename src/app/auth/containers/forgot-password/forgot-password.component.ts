import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  public forgotPasswordForm!: FormGroup;
  public wasSent: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.clearAlert();
    this.createForm();
  }

  private createForm(){
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  public submit(){
    this.wasSent = true;
    if (this.forgotPasswordForm.invalid) return;
    this.authService.forgotPassword(this.forgotPasswordForm.value);
    this.wasSent = false;
  }

  clearForgotPasswordForm(){
    if (this.authService.alert.class == 'alert-success') this.forgotPasswordForm.reset();
    this.authService.clearAlert();
  }

}
