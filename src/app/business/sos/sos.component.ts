import { Component, OnInit } from '@angular/core';
import { SosService } from './service/sos.service';
import { ModalController } from '@ionic/angular';
import { ViewProductComponent } from '@app/shared/view-product/view-product.component';
import { MapComponent } from '@app/shared/map/map.component';

@Component({
  selector: 'app-sos',
  templateUrl: './sos.component.html',
  styleUrls: ['./sos.component.css']
})
export class SosComponent implements OnInit {

  lat: number;
  long: number;
  stores: any [];

  constructor(
    private sosService: SosService,
    private modalController: ModalController
  ) { }

  ngOnInit(): void {
  }

  async applyLocationFromMap() {
    const modal = await this.modalController.create({
      component: MapComponent,
      showBackdrop: true,
      swipeToClose: true,
    });
    modal.onDidDismiss()
      .then((data) => {
        const location = data['data']; // Here's your selected user!
        this.lat = location.lat;
        this.long = location.long;
      });
    return await modal.present();
  }
  
  getStoresNearBy() {
    this.stores = []
    this.sosService.getStoreNearBy(this.lat, this.long).subscribe((res) => {
      console.log(res)
      this.stores = res.stores;
    })
  }
  
}
