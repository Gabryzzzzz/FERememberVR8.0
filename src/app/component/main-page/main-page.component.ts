import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent {

  constructor(public _authService: AuthenticateService, public _router: Router) { }

  seeNavBar(): boolean {
    return this._authService.isLogged() && this._router.url != '/login' && this._router.url != '/registration';
  }

}
