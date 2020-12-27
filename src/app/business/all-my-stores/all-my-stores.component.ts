import { Component, OnInit } from '@angular/core';
import { MyStoresService } from './services/my-stores.service';
@Component({
  selector: 'app-all-my-stores',
  templateUrl: './all-my-stores.component.html',
  styleUrls: ['./all-my-stores.component.css']
})
export class AllMyStoresComponent implements OnInit {
  stores: any [];
  constructor(private myStoresService: MyStoresService) {
    this.myStoresService.getMyStores().subscribe((res) => {
      this.stores = res.stores.map((store) => {
        return { ...store, href: `store-info/${store._id}` };
      });
    });
   } 

  ngOnInit(): void {
  }

}
