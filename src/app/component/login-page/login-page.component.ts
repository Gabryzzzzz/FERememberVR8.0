import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent {

  constructor(public _router: Router) { }

  //Simply put a boolean in the local storage to check if the user is logged in or not
  accedi(){
    localStorage.setItem('logged', 'true');
    this._router.navigate(['/home']);
  }

}
