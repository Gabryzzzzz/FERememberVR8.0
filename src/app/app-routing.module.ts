import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import { MarketplaceComponent } from './component/marketplace/marketplace.component';
import { RegistrationPageComponent } from './component/registration-page/registration-page.component';
import { AuthGuard } from './services/auth.guard';
import { IMieiProdottiComponent } from './component/i-miei-prodotti/i-miei-prodotti.component';

const routes: Routes = [
  {
    path: 'login', component: LoginPageComponent
  },
  {
    path: 'registration', component: RegistrationPageComponent
  },
  {
    path: 'home', component: MainPageComponent, canActivate: [AuthGuard]
  },
  {
    path: 'market', component: MarketplaceComponent, canActivate: [AuthGuard]
  },
  {
    path: 'mieiProdotti', component: IMieiProdottiComponent, canActivate:[AuthGuard]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
