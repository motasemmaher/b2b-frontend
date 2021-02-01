import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { SwPush } from '@angular/service-worker';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  readonly VAPID_PUBLIC_KEY = "BKUYYDI-m-U6MHCs4k30yvVZQwK5_cVNJr07SzdnbIWELB8DU4zsoDUpBm9vT1W8uwPlfW9tuTEmsMDyd89TVyk";
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    // private swPush: SwPush,
  ) {
    this.initializeApp();
    // console.log(this.swPush.isEnabled)
    // navigator.serviceWorker.ready.then(function(reg) {
    //   this.subscribeToNotifications();
    //   reg.pushManager.getSubscription().then(function(subscription) {

    //     subscription.unsubscribe().then(function(successful) {
    //       console.log(successful)
    //       // You've successfully unsubscribed
    //     }).catch(function(e) {
    //       // Unsubscription failed
    //     })
    //   })
    // });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {

  }

  subscribeToNotifications() {
  }

  //   this.swPush.requestSubscription({
  //     serverPublicKey: this.VAPID_PUBLIC_KEY
  //   })
  //     .then(sub => console.log(sub))
  //     .catch(err => console.error("Could not subscribe to notifications", err));
  // }
}
