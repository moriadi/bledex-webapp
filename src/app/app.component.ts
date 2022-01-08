import { Component, HostBinding } from '@angular/core';
import {  ScreenService, AppInfoService } from './shared/services';
import { User } from './models/user';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

  user: User;
  is_invoice: boolean;

  constructor(
    private screen: ScreenService, 
    private router: Router,
    public appInfo: AppInfoService,
    private authenticationService: AuthenticationService) { 
    this.authenticationService.user.subscribe(x => this.user = x);

  }

  isAutorized() {
    this.is_invoice = this.router.url.includes('facture');
    return this.user != null && !this.router.url.includes('facture');
  }

  get isAdmin() {
      return this.user && this.user.fonction.code === 'admin';
  }

  logout() {
      this.authenticationService.logout();
  }
}
