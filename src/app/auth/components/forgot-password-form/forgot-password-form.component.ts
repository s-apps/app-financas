import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss']
})
export class ForgotPasswordFormComponent {

  @Input() forgotPasswordForm!: FormGroup;
  @Input() wasSent: boolean = false;
  @Output() onSubmit = new EventEmitter();

}
