import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable()
export class ToastService {

  constructor(private toastController: ToastController) {}

  public async presentToastWithOptions(type: string, message: string, color, cb?: any) {
    const toast = await this.toastController.create({
      header: type,
      message,
      color,
      position: 'top',
      duration: 3000,
      buttons: [ {
          text: 'Close',
          role: 'cancel',
          handler: () => cb,
        }
      ]
    });
    toast.present();
  }

}
