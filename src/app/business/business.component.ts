import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BusinessRoutingConstants, SharedRoutingConstants } from '@app/core/constants/routes';
import { SharedConstants } from '@app/core/constants/constants';
import { AuthService } from '@app/core/services/auth/auth.service';

import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-component',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'],
})
export class BusinessComponent implements OnInit, OnDestroy {
  public selectedIndex = 0;
  public folder: string;

  username: string;

  garageOwnerPages = [
    {
      title: 'My Stores',
      url: `/${BusinessRoutingConstants.BUSINESS}/${BusinessRoutingConstants.MY_STORES}`,
      icon: 'storefront',
    },
    {
      title: 'Complaints',
      url: `/${BusinessRoutingConstants.BUSINESS}/${BusinessRoutingConstants.COMPLAINTS}`,
      icon: 'document-text',
    },
  ];

  CarOwnerPages = [
    {
      title: 'My Cars',
      url: '/business/my-cars',
      icon: 'car-sport',
    },
  ];
  guestPages = [
    {
      title: 'STORES',
      url: '/business/store',
      icon: 'storefront',
    },
    {
      title: 'PRODUCTS',
      url: '/business/products',
      icon: 'cube',
    },
    {
      title: 'OFFERS',
      url: '/business/offers',
      icon: 'gift',
    },
    {
      title: 'SHOPPING_CART',
      url: '/business/shopping-card',
      icon: 'bag-handle',
    },
  ];

  public appPages: any [];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  role: string;
  isLoggedIn = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private translate: TranslateService,
    private authService: AuthService // private menu: MenuController
  ) {
    this.appPages = [
      {
        title: 'Search By Image',
        url: '/business/search-by-image',
        icon: 'search',
      },
      {
        title: 'CHAT',
        url: '/business/chat',
        icon: 'mail',
      },
      {
        title: 'SETTING',
        url: '/business/settings',
        icon: 'settings',

      },

    ];
    this.role = this.authService.getRole();
    if (this.authService.loggedIn) {
     this.isLoggedIn = true;
    }
    // this.menu.enable(true, 'mainContent')
    this.username = this.authService.getUsername();
    if (
      this.role === SharedConstants.GUEST ||
      this.role === SharedConstants.CAR_OWNER
    ) {
      this.appPages.unshift(...this.guestPages);
      if (this.role === SharedConstants.CAR_OWNER) {
        this.appPages.unshift(...this.CarOwnerPages);
      }
    } else if (this.role === SharedConstants.GARAGE_OWNER) {
      this.appPages.unshift(...this.garageOwnerPages);
    } else if (this.role === SharedConstants.ADMIN ){
      this.appPages = [
        {
          title: 'Manage accounts',
          url: '/business/admin/manage-account',
          icon: 'people',
        },
        {
          title: 'Complaints',
          url: '/business/admin/complaints',
          icon: 'document-text',
        },
        {
          title: 'SETTING',
          url: '/business/settings',
          icon: 'settings',
        },
      ];
    }
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }
  }
  ngOnDestroy() {
    this.appPages = [];
  }
}





