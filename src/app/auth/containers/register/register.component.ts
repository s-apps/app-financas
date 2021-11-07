import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm!: FormGroup;
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
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: ['', [Validators.required]]
    },
    {
      validator: this.passwordsMatch()
    } as AbstractControlOptions); //Deprecated This API is not typesafe and can result in issues with Closure Compiler renaming. Use the FormBuilder#group overload with AbstractControlOptions instead.
  }

  private passwordsMatch() {
    return (registerForm: FormGroup) => {
      const passwordControl = registerForm.controls['password'];
      const passwordConfirmationControl = registerForm.controls['password_confirmation'];
      if (passwordControl.value !== passwordConfirmationControl.value) {
        passwordConfirmationControl.setErrors({ passwordsMatch: true });
      } else {
        passwordConfirmationControl.setErrors(null);
      }
    }
  }

  public submit(){
    this.wasSent = true;
    if (this.registerForm.invalid) return;
    this.authService.register(this.registerForm.value);
    this.wasSent = false;
  }

  public clearRegisterForm(){
    if (this.authService.alert.class == 'alert-success') this.registerForm.reset();
    this.authService.clearAlert();
  }

}
