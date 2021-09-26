import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  @Input() loginForm!: FormGroup;
  @Input() wasSent: boolean = false;
  @Output() onSubmit = new EventEmitter();

}
