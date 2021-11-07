import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private localStorage: LocalStorageService
  ) { }

  get token(){
    return this.localStorage.get('token');
  }

  set token(token: string){
    token ? this.localStorage.set('token', token) : this.localStorage.remove('token');
  }
}
