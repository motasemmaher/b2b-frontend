import { fromEvent, Observable, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BasedUrlsConstants, BusinessRoutingConstants, SharedRoutingConstants } from '@app/core/constants/routes';
import { SharedConstants } from '@app/core/constants/constants';
import { AuthService } from '@app/core/services/auth/auth.service';

import { Router } from '@angular/router';
import { SearchService } from '@app/shared/search/search.service';

@Component({
  selector: 'app-component',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss'],
})
export class BusinessComponent implements OnInit, OnDestroy {
  public selectedIndex = 0;
  public folder: string;
  isSearchOpen: boolean = false;
  isChangeRoute: boolean = false;
  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;
  isMobile: boolean = false;
  listenOnRouting: Subscription;
  username: string;
  public isLoading: boolean = true;

  garageOwnerPages = [
    {
      title: 'MY_STORES',
      url: `/${BusinessRoutingConstants.BUSINESS}/${BusinessRoutingConstants.MY_STORES}`,
      icon: 'storefront',
    },
    {
      title: 'ADD_STORE',
      url: `/${BusinessRoutingConstants.BUSINESS}/${BusinessRoutingConstants.MY_STORES}/${BusinessRoutingConstants.ADD_STORE}`,
      icon: 'add-circle',
    },
    {
      title: 'ORDERS',
      url: `/${BusinessRoutingConstants.BUSINESS}/${BusinessRoutingConstants.MY_STORES}/${BusinessRoutingConstants.ORDERS}`,
      icon: 'documents',
    },
    {
      title: 'COMPLAINTS',
      url: `/${BusinessRoutingConstants.BUSINESS}/${BusinessRoutingConstants.COMPLAINTS}`,
      icon: 'document-text',
    },
  ];
  CarOwnerPages = [
    {
      title: 'MY_CARS',
      url: '/business/my-cars',
      icon: 'car-sport',
    },
    {
      title: 'SOS',
      url: `/${BusinessRoutingConstants.BUSINESS}/${BusinessRoutingConstants.SOS}`,
      icon: 'warning',
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
    // {
    //   title: 'OFFERS',
    //   url: '/business/offers',
    //   icon: 'gift',
    // },
    {
      title: 'SHOPPING_CART',
      url: '/business/shopping-card',
      icon: 'bag-handle',
    },
  ];

  public appPages: any[];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  role: string;
  isLoggedIn = false;
  searchResult: any[];
  constructor(
    private router: Router,
    private searchService: SearchService,
    private authService: AuthService // private menu: MenuController
  ) {

  }

  logout() {
    this.authService.logout();
  }


  search(value) {
    const stores = [];
    const products = [];
    this.isLoading = true;
    this.searchResult = null;
    if (value) {
      this.searchService.search(value).subscribe(res => {
        console.log(res);
        stores.push(...res.storesSearchResult.map((store) => {
          return { ...store, href: `store/info/${store._id}`, type: 'stores', image: store.image.includes('.png') ? `${BasedUrlsConstants.BASED_URL_LOCALHOST}/${store.image}` : store.image };
        }));
        products.push(...res.productsSearchResult.map((product) => {
          return { ...product, type: 'products', image: product.image.includes('.png') ? `${BasedUrlsConstants.BASED_URL_LOCALHOST}/${product.image}` : product.image };
        }));
        this.searchResult = [...stores, ...products];
        this.isLoading = false;
        if(stores.length === 0 && products.length === 0){
          this.searchResult = [];
        }
      })
    } else {
      this.searchResult = [];
    }
  }

  isSearchOpened(value: boolean) {
    this.isSearchOpen = value;
  }

  listenOnChangeSizeWindow() {
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe(evt => {
      if (window.innerWidth <= 720 && !this.isMobile) {
        this.isMobile = true;
      } else if (window.innerWidth > 720 && this.isMobile) {
        this.isMobile = false;
      }
    });
  }

  ngOnInit() {
    this.listenOnRouting = this.router.events.subscribe(() => {
      this.searchResult = [];
      if (this.isSearchOpen) {
        this.isChangeRoute = true;
        setTimeout(() => {
          this.isChangeRoute = false;
        }, 50);
      }
      this.isSearchOpen = false;
    });
    this.appPages = [
      {
        title: 'SEARCH_BY_IMAGE',
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
    } else if (this.role === SharedConstants.ADMIN) {
      this.appPages = [
        {
          title: 'MANAGE_ACCOUNTS',
          url: '/business/admin/manage-account',
          icon: 'people',
        },
        {
          title: 'COMPLAINTS',
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
    if (window.innerWidth <= 720 && !this.isMobile) {
      this.isMobile = true;
    } else if (window.innerWidth > 720 && this.isMobile) {
      this.isMobile = false;
    }
    this.listenOnChangeSizeWindow();
  }

  ngOnDestroy(): void {
    this.listenOnRouting.unsubscribe();
    this.resizeSubscription$.unsubscribe();
    console.log('ewrwwer')
    this.appPages = [];
  }
}





