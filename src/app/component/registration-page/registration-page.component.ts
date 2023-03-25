import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.less']
})
export class RegistrationPageComponent {

  constructor(public _router: Router) { }

  registrati(){
    localStorage.setItem('logged', 'true');
    this._router.navigate(['/home']);
  }

}
