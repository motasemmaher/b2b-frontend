import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '../../../model/store';
import { StoresService } from '../../../service/stores.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '@app/core/services/auth/auth.service';

@Component({
  selector: 'app-about-store',
  templateUrl: './about-store.component.html',
  styleUrls: ['./about-store.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutStoreComponent implements OnInit {
  store: Store;
  storeId: string;
  isLoggedIn: boolean = false;
  constructor(
    private storesService: StoresService,
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController,
    private authService: AuthService,
  ) {
    this.isLoggedIn = this.authService.loggedIn;
    this.activatedRoute.params.subscribe((params) => {
      this.storeId = params.id;
      this.storesService.getStoreById('stores', this.storeId).subscribe((res) => {
        this.store = res;
      });
    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Write Complaint',
      inputs: [
        {
          name: 'message',
          type: 'textarea',
          placeholder: 'Message',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Send',
          handler: (data) => {
            console.log(data);
            this.storesService.writeComplaint(this.storeId, data)
              .subscribe();
          },
        },
      ],
    });
    await alert.present();
  }
  ngOnInit(): void {}
}
