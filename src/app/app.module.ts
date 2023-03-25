import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import { RegistrationPageComponent } from './component/registration-page/registration-page.component';
import { SidebarComponent } from './main-layout/sidebar/sidebar.component';
import { AddVideoComponent } from './component/add-video/add-video.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { SafeUrlPipe } from './pipe/safe-url.pipe';
import { ConfirmDialogComponent } from './component/modals/confirm-dialog/confirm-dialog.component';
import { SuccessDialogComponent } from './component/modals/success-dialog/success-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    RegistrationPageComponent,
    SidebarComponent,
    AddVideoComponent,
    AddUserComponent,
    SafeUrlPipe,
    ConfirmDialogComponent,
    SuccessDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
