import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Alert } from 'src/app/shared/alerts/models/alert';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss']
})
export class ForgotPasswordFormComponent {

  @Input() forgotPasswordForm!: FormGroup;
  @Input() wasSent: boolean = false;
  @Input() alert: Alert = { class: '', message: '' };
  @Output() onSubmit = new EventEmitter();
  @Output() onClearAlert = new EventEmitter();

}
