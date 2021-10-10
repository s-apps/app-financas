import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthFacade } from '../../auth.facade';

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
    public facade: AuthFacade
  ) { }

  ngOnInit(): void {
    this.facade.clearAlert();
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
    });
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
    this.facade.register(this.registerForm.value);
    this.wasSent = false;
  }

  public clearRegisterForm(){
    if (this.facade.alert.class == 'alert-success') this.registerForm.reset();
    this.facade.clearAlert();
  }

}
