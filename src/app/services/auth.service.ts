import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NbMenuItem } from '@nebular/theme';
import { MENU_ITEMS_AUTH, MENU_ITEMS_PUBLIC } from '../app-menu';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = new BehaviorSubject<boolean>(true);
  menuItems = new BehaviorSubject<NbMenuItem[]>(MENU_ITEMS_PUBLIC);
  superSecretPass = 'root';

  authenticate(pass: string): void {
    if (pass === this.superSecretPass) {
      this.isAuthenticated.next(true);
      this.menuItems.next(MENU_ITEMS_AUTH);
    } else {
      this.isAuthenticated.next(false);
      this.menuItems.next(MENU_ITEMS_PUBLIC);
    }
  }
}
