import { Component, OnInit } from '@angular/core';
import { BusinessService } from '@app/business/services/business.service';
import { MyStoresService } from '../services/my-stores.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  storeId: string;
  orders: any [];
  storesId: any [];
  customPopoverOptions: any = {
    header: 'Select Store',
  };
  statusOrder: string = 'pending';
  statuses: any[] = [
    {
      key: 'pending',
      label: 'Pending',
    },
    {
      key: 'delivered',
      label: 'Delivered',
    },
    {
      key: 'cancel',
      label: 'Canceled',
    },
    {
      key: '',
      label: 'All',
    },
  ]

  constructor(
    private businessService: BusinessService,
    private myStoresService: MyStoresService,
    private activatedRoute: ActivatedRoute,
  ) {
    // this.getMyStoresId();
   }

  ngOnInit(): void {
  }

  getOrders(storeId, status) {
    // // this.myStoresService.getOrders(storeId, status).subscribe(res => {
    //   this.orders = res.orders;
    // });
  }

  selectStatusOrder( ) {

  }
  getMyStoresId() {
    this.myStoresService.getMyStoresId().subscribe(res => {
      this.storesId = res.storesId;
      this.storeId = this.storesId[0]?._id;
      // this.getOrders(this.storeId);
    });
  }

  selectStore(value) {
    let { value: storeId } = value.target;
    // this.getOrders(storeId);
    this.storeId = storeId;
  }

}
