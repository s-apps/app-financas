import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Alert } from 'src/app/shared/alerts/models/alert';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  @Input() loginForm!: FormGroup;
  @Input() wasSent: boolean = false;
  @Input() alert: Alert = { class: '', message: '' };
  @Output() onSubmit = new EventEmitter();
  @Output() onClearAlert = new EventEmitter();

}
