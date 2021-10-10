import { Injectable } from '@angular/core';
import { Alert } from '../models/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alert: Alert = { class: '', message: '' };

  constructor() { }

  add(alert: Alert){
    this.alert = alert;
  }

  clear(){
    this.alert = { class: '', message: '' };
  }
}
