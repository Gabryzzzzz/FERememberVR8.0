import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthenticateService {
  constructor() { }

  //check is is logged by checking the local storage
  isLogged(): boolean {
    return localStorage.getItem('logged') === 'true';
  }

}
