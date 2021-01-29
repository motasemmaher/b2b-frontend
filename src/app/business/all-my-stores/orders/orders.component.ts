import { Component, OnInit } from '@angular/core';
import { BusinessService } from '@app/business/services/business.service';
import { MyStoresService } from '../services/my-stores.service';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from '@app/shared/toaster/toast.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  storeId: string;
  status: string;
  orders: any[];
  storesId: any[];
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
  ];

  constructor(
    private myStoresService: MyStoresService,
    private toastService: ToastService
  ) {
    this.getMyStoresId();
  }

  ngOnInit(): void {
  }

  getOrders() {
    console.log(this.storeId, this.status)
    this.orders = [];
    this.myStoresService.getOrders(this.storeId, this.status).subscribe(res => {
      console.log(res);
      this.orders = res.order;
    });
  }

  getMyStoresId() {
    this.myStoresService.getMyStoresId().subscribe(res => {
      this.storesId = res.storesId;
      console.log(this.storesId[0]?._id)
      this.storeId = this.storesId[0]?._id;
      this.status = this.statuses[0]?.key;
      this.getOrders();
    });
  }

  selectStore(value) {
    const { value: storeId } = value.target;
    this.storeId = storeId;
    this.getOrders();
  }

  selectStatusOrder(value) {
    const { value: status } = value.target;
    this.status = status;
    this.getOrders();
  }

  updateOrderStatus(storeId, orderId, status) {
    this.myStoresService.updateOrderStatus(storeId, orderId, status).subscribe(res => {
      this.toastService.presentToastWithOptions('success', `order ${status} successfully`, 'success');
      this.getOrders();
    })
  }
}
