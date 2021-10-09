import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { MessageService } from "../shared/messages/services/message.service";
import { AuthApi } from "./api/auth.api";

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {

  constructor(
    private api: AuthApi,
    private router: Router,
    private messageService: MessageService
  ){}

  get messages(){
    return this.messageService.messages;
  }

  clearMessages(){
    this.messageService.clear();
  }

  login(loginForm: any){
    return this.api.login(loginForm).subscribe({
      next: (res) => {
        this.router.navigate(['/dashboard']);
      },
      error: error => {
        console.error(error.error.message)
        this.messageService.add(error.error.message);
      }
    });
  }

}
