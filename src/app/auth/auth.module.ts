import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { ForgotPasswordComponent } from './containers/forgot-password/forgot-password.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ForgotPasswordFormComponent } from './components/forgot-password-form/forgot-password-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { InputFocusDirective } from '../shared/directives/input-focus/input-focus.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MessagesModule } from '../shared/messages/messages.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    LoginFormComponent,
    ForgotPasswordFormComponent,
    RegisterFormComponent,
    InputFocusDirective
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    MessagesModule
  ]
})
export class AuthModule { }
