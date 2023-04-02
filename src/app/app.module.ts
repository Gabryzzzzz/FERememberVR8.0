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
import { AddVideosComponent } from './component/modals/add-videos/add-videos.component';
import { ViewCodeComponent } from './component/modals/view-code/view-code.component';
import { AddUsersComponent } from './component/modals/add-users/add-users.component';
import { FormsModule } from '@angular/forms';
import { MarketplaceComponent } from './component/marketplace/marketplace.component';
import { HttpClientModule } from '@angular/common/http';
import { AcquistoModalComponent } from './component/modals/acquisto-modal/acquisto-modal.component';
import { IMieiProdottiComponent } from './component/i-miei-prodotti/i-miei-prodotti.component';

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
    SuccessDialogComponent,
    AddVideosComponent,
    ViewCodeComponent,
    AddUsersComponent,
    MarketplaceComponent,
    AcquistoModalComponent,
    IMieiProdottiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
