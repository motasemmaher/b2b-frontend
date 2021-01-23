import { Component, OnInit } from '@angular/core';
import { MyStoresService } from './services/my-stores.service';
import { AuthService } from '@app/core/services/auth/auth.service';
@Component({
  selector: 'app-all-my-stores',
  templateUrl: './all-my-stores.component.html',
  styleUrls: ['./all-my-stores.component.css']
})
export class AllMyStoresComponent implements OnInit {
  stores: any[];
  userId: string;
  constructor(private myStoresService: MyStoresService, private auth: AuthService) {
    this.userId = this.auth.userInfo()._id;
    this.getMyStores();
  }

  ngOnInit(): void {
  }

  getMyStores() {
    this.myStoresService.getMyStores().subscribe((res) => {
      console.log(res)
      this.stores = res.stores.map((store) => {
        return { ...store, href: `store-info/${store._id}`, editPath: store.userId === this.userId ? `edit-store/${store._id}`: '', isOwne: store.userId === this.userId };
      });
    });
  }

  deleteStore(index: number) {
    const storeId = this.stores[index]._id;
    this.myStoresService.deleteStore(storeId).subscribe((res) => {
      this.getMyStores();
    })
  }
}
