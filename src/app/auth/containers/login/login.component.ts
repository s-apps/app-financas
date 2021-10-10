import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthFacade } from '../../auth.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
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
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      remember_me: [false]
    });
  }

  public submit(){
    this.wasSent = true;
    if (this.loginForm.invalid) return;
    this.facade.login(this.loginForm.value);
  }

}
