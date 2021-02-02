import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoresService } from './service/stores.service';
import { Store } from './model/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit, OnDestroy {
  stores: Store[];
  listenOnErrorLoading: Subscription;
  constructor(
    private storeService: StoresService
  ) {
    this.stores = [];
    this.listenOnErrorLoading = this.listenOnErrorLoading = this.storeService.listenOnErrorLoading().subscribe(res => {
      this.stores = [];
    })
    this.getStores();
  }

  ngOnInit(): void {

  }

  getStores() {
    // setTimeout(() => {
      this.storeService.getStores('stores').subscribe((res) => {
        this.stores = res.stores.map((store) => {
          return { ...store, href: `info/${store._id}/tabs` };
        });
      });
    // }, 1000)
  }
  ngOnDestroy(): void {
    this.listenOnErrorLoading.unsubscribe();
  }
}
