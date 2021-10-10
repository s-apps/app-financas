import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Alert } from 'src/app/shared/alerts/models/alert';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  @Input() registerForm!: FormGroup;
  @Input() wasSent: boolean = false;
  @Input() alert: Alert = { class: '', message: ''};
  @Output() onSubmit = new EventEmitter();
  @Output() onClearAlert = new EventEmitter();

}
