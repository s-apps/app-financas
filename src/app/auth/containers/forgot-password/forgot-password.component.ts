import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthFacade } from '../../auth.facade';

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
    public facade: AuthFacade
  ) { }

  ngOnInit(): void {
    this.facade.clearAlert();
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
    this.facade.forgotPassword(this.forgotPasswordForm.value);
    this.wasSent = false;
  }

  clearForgotPasswordForm(){
    if (this.facade.alert.class == 'alert-success') this.forgotPasswordForm.reset();
    this.facade.clearAlert();
  }

}
