import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm!: FormGroup;
  public wasSent: boolean = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
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
    console.log(this.registerForm.value)
  }

}
