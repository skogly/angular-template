import { AfterViewInit, Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { NbDialogRef, NbDialogService, NbSidebarService } from '@nebular/theme';
import { MENU_ITEMS_PUBLIC, MENU_ITEMS_AUTH } from './app-menu';
import { AuthService } from './services/auth.service';
import { LayoutService } from './services/layout.service';

@Component({
  selector: 'app-auth-dialog',
  template: `
    <nb-layout-column>
      <nb-card style="width: 250px;">
        <nb-card-header style="text-align: center">Authenticate</nb-card-header>
        <nb-card-body style="margin: auto;">
          <label for="pass"></label>
          <input
            type="password"
            #pass
            id="pass"
            [(ngModel)]="password"
            (keyup.enter)="onSubmit(pass.value)"
          />
        </nb-card-body>
        <nb-card-footer style="display: flex; justify-content: space-between">
          <button nbButton (click)="onCancel()">Cancel</button>
          <button nbButton status="primary" (click)="onSubmit(pass.value)">
            Submit
          </button>
        </nb-card-footer>
      </nb-card>
    </nb-layout-column>
  `,
})
export class AuthDialogComponent {
  isAuthenticated = false;
  password = '';

  constructor(
    protected dialogRef: NbDialogRef<AuthDialogComponent>,
    private authService: AuthService
  ) {
    this.authService.isAuthenticated.subscribe((val) => {
      this.isAuthenticated = val;
    });
  }

  onSubmit(pass: string): void {
    this.authService.authenticate(pass);
    this.password = '';
    if (this.isAuthenticated) {
      this.onCancel();
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'angular';
  menu;
  isAuthenticated = false;
  toggledSidebar = false;

  constructor(
    private sidebarService: NbSidebarService,
    private layoutService: LayoutService,
    private dialogService: NbDialogService,
    private authService: AuthService,
    private breakpointObserver: BreakpointObserver
  ) {
    authService.isAuthenticated.subscribe((val) => {
      this.isAuthenticated = val;
    });
    authService.menuItems.subscribe((val) => {
      this.menu = val;
    });
    if (this.isAuthenticated) {
      this.menu = MENU_ITEMS_AUTH;
    } else {
      this.menu = MENU_ITEMS_PUBLIC;
    }

    breakpointObserver.observe(['(max-width: 800px)']).subscribe((result) => {
      if (result.matches) {
        if (!this.toggledSidebar) {
          sidebarService.toggle(true, 'menu-sidebar');
          layoutService.changeLayoutSize();
        }
      } else {
        if (!this.toggledSidebar) {
          sidebarService.toggle(true, 'menu-sidebar');
          layoutService.changeLayoutSize();
        }
      }
      this.toggledSidebar = false;
    });
  }

  ngAfterViewInit(): void {
    if (window.innerWidth < 601) {
      this.toggleSidebar();
    }
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();
    this.toggledSidebar = true;
    return false;
  }

  openDialog(): void {
    this.dialogService.open(AuthDialogComponent, {
      hasBackdrop: true,
      closeOnBackdropClick: true,
    });
  }

  logOut(): void {
    this.authService.authenticate('');
  }
}
