import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  NbMediaBreakpointsService,
  NbMenuService,
  NbSidebarService,
  NbThemeService,
} from "@nebular/theme";
import { WalletService } from '../../../pages/payment/Wallet/service/wallet.service';
import { Wallet } from '../../../pages/payment/Wallet/model/wallet';

import { UserData } from "../../../@core/data/users";
import { LayoutService } from "../../../@core/utils";
import { map, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { AuthService } from "../../../services/login/auth.service";
import { UserService } from "../../../@core/mock/users.service";
import { UseramaniService } from "../../../services/amani/useramani.service";

@Component({
  selector: "ngx-header",
  styleUrls: ["./header.component.scss"],
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;

  themes = [
    {
      value: "default",
      name: "Light",
    },
    {
      value: "dark",
      name: "Dark",
    },
    {
      value: "cosmic",
      name: "Cosmic",
    },
    {
      value: "corporate",
      name: "Corporate",
    },
  ];

  currentTheme = "default";

  userMenu = [
    { title: "Profile", link: "/pages/forms/profile", icon: "person" },
    { title: 'My Purchases', link: '/pages/payment/UserOrders' },
    { title: 'Billing', link: '/pages/payment/Billing' },
    { title: "Log out", link: "/auth/logout", icon: "log-out-outline" },
  ];

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    // private userService: UserData,
    private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService,
    private authsrv: AuthService,
    private us: UseramaniService,
    private walletservice: WalletService
  ) {}

  wallet: Wallet;

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;

    // this.userService.getUsers()
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((users: any) => this.user = users.nick);
    let user_id = this.authsrv.getLoggedInID();
    this.us.getOneuser(user_id).subscribe((response: any) => {

      const updatedUser = {
        ...response,
        // picture: response.imagePath,
        // imagePath: undefined,
      };


      this.user = updatedUser;
    });
    this.walletservice.getWalletOfUser().subscribe(
      wallet => {
        this.wallet = wallet;
        console.log(this.wallet);
      },
      error => {
        console.log('An error occurred while retrieving wallet information.');
      }
    );
    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService
      .onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$)
      )
      .subscribe(
        (isLessThanXl: boolean) => (this.userPictureOnly = isLessThanXl)
      );

    this.themeService
      .onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$)
      )
      .subscribe((themeName) => (this.currentTheme = themeName));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, "menu-sidebar");
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
