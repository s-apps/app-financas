import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  set(key: string, value: string) {
    window.localStorage[key] = value;
    return this;
  }

  get(key: string, defaultValue = null) {
    return window.localStorage[key] || defaultValue;
  }

  setObject(key: string, value:Object) {
    window.localStorage[key] = JSON.stringify(value);
    return this;
  }

  getObject(key: string) {
    return JSON.parse(window.localStorage[key] || null);
  }

  remove(key: string) {
    window.localStorage.removeItem(key);
    return this;
  }

}
