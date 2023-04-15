import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from './services/authenticate.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'FERememberVR8.0';

  constructor(
    public _authService: AuthenticateService,
    public _router: Router,
    public _http: HttpClient) { }

  ngOnInit(): void {
    this._http.get('http://localhost:5088/Video/GetAllNames').subscribe(x=> console.log(x))
  }

  seeNavBar(): boolean {
    return this._authService.isLogged() && this._router.url != '/login' && this._router.url != '/registration';
  }


}
