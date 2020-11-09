import { Component, OnInit } from '@angular/core';


import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-component',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  public selectedIndex = 0;
  public folder: string;

  public appPages = [
    {
      title: 'Search By Image',
      url: '/folder/Inbox',
      icon: 'search'
    },
    {
      title: 'Chat',
      url: '/folder/Inbox',
      icon: 'mail'
    },
    {
      title: 'Home',
      url: '/business/home',
      icon: 'home'
    },
    {
      title: 'Stores',
      url: '/business/store',
      icon: 'storefront'
    },
    {
      title: 'Prodects',
      url: '/folder/Archived',
      icon: 'pricetags'
    },
    {
      title: 'Categories',
      url: '/folder/Trash',
      icon: 'grid'
    },
    {
      title: 'Offers',
      url: '/folder/Spam',
      icon: 'gift'
    },
    {
      title: 'Shopping Cart',
      url: '/folder/Spam',
      icon: 'bag-handle'
    },
    {
      title: 'Settings',
      url: '/folder/Spam',
      icon: 'settings'
    },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
  }


  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

}
