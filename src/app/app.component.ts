import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from './services/authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'FERememberVR8.0';

  constructor(public _authService: AuthenticateService, public _router: Router) { }


  seeNavBar(): boolean {
    return this._authService.isLogged() && this._router.url != '/login' && this._router.url != '/registration';
  }

}
