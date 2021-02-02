import { Component, OnInit, OnDestroy } from '@angular/core';
import { MyStoresService } from './services/my-stores.service';
import { AuthService } from '@app/core/services/auth/auth.service';
import { BasedUrlsConstants } from '@app/core/constants/routes';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-all-my-stores',
  templateUrl: './all-my-stores.component.html',
  styleUrls: ['./all-my-stores.component.css']
})
export class AllMyStoresComponent implements OnInit, OnDestroy {
  stores: any[];
  userId: string;
  listenOnErrorLoading: Subscription;
  constructor(private myStoresService: MyStoresService, private auth: AuthService) {
    this.userId = this.auth.userInfo()._id;
    this.stores = [];
    this.getMyStores();
    this.listenOnErrorLoading = this.myStoresService.listenOnErrorLoading().subscribe(res => {
      this.stores = [];
    })
  }

  ngOnInit(): void {
  }

  getMyStores() {
    this.myStoresService.getMyStores().subscribe((res) => {
      this.myStoresService.setSkip(this.myStoresService.skip + 5);
      this.stores.push(...res.stores.map((store) => {
        return { ...store, href: `store-info/${store._id}`, editPath: store.userId === this.userId ? `edit-store/${store._id}` : '', isOwne: store.userId === this.userId, image: store.image.includes('.png') ? `${BasedUrlsConstants.BASED_URL_LOCALHOST}/${store.image}`: store.image };
      }));
    });
  }

  deleteStore(index: number) {
    const storeId = this.stores[index]._id;
    this.myStoresService.deleteStore(storeId).subscribe((res) => {
      this.myStoresService.resetBothDataSkipAndLimit();
      this.stores = [];
      this.getMyStores();
    })
  }
  ngOnDestroy(): void {
    this.myStoresService.resetBothDataSkipAndLimit();
    this.listenOnErrorLoading.unsubscribe();
  }
}
