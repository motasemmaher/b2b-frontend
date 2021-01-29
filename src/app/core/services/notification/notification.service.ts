import { Injectable } from '@angular/core';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';
// import { promises } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private push: Push) { }

  // hasPermission(): boolean | promises<any> {
  //   return this.push.hasPermission()
  // }

  // createChannel() {
  //   // Create a channel (Android O and above). You'll need to provide the id, description and importance properties.
  //   this.push.createChannel({
  //     id: "testchannel1",
  //     description: "My first test channel",
  //     // The importance property goes from 1 = Lowest, 2 = Low, 3 = Normal, 4 = High and 5 = Highest.
  //     importance: 3,
  //     //badge is used to if badge appears on the app icon see https://developer.android.com/reference/android/app/NotificationChannel.html#setShowBadge(boolean).
  //     //false = no badge on app icon.
  //     //true = badge on app icon
  //     badge: false
  //   }).then(() => console.log('Channel created'));
  // }

  // deleteChannel() {
  //   this.push.deleteChannel('testchannel1').then(() => console.log('Channel deleted'));
  // }

  
}
