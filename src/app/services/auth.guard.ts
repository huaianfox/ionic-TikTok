import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../pages/passport/login/login.page';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {
  constructor(
    private modalCtr: ModalController,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log('can enter ???');
    this.createLogin();
    return false;
  }

  private async createLogin() {
    const modal = await this.modalCtr.create({
      component: LoginPage,
      cssClass: 'default-transparent'
    });
    return await modal.present();
  }
}
