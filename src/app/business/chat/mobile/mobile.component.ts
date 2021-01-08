import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  index = 0;

  contactForm: FormGroup;
  contacts: FormArray = new FormArray([
    new FormGroup({ id: new FormControl(0), username: new FormControl('Ibrahim Sisneros'), image: new FormControl("https://img.icons8.com/dusk/64/000000/test-account.png"), chat: new FormControl([['hi','sent','14:30'],['yo','received','14:35']]) }),
    new FormGroup({ id: new FormControl(1), username: new FormControl('Kamil Strouse'), image: new FormControl("https://img.icons8.com/dusk/64/000000/test-account.png"), chat: new FormControl([['hi','received','14:30'],['yo','sent','14:35']]) }),
    new FormGroup({ id: new FormControl(2), username: new FormControl('Drury Verde'), image: new FormControl("https://img.icons8.com/dusk/64/000000/test-account.png"), chat: new FormControl([['hi','sent','14:30'],['yo','received','14:35']]) }),
    new FormGroup({ id: new FormControl(3), username: new FormControl('Ademaro Strouse'), image: new FormControl("https://img.icons8.com/dusk/64/000000/test-account.png"), chat: new FormControl([['hi','sent','14:30'],['yo','received','14:35']]) }),
    new FormGroup({ id: new FormControl(4), username: new FormControl('Syna Hermes'), image: new FormControl("https://img.icons8.com/dusk/64/000000/circled-user-female-skin-type-6.png"), chat: new FormControl([['hi','sent','14:30'],['yo','received','14:35']]) }),
    new FormGroup({ id: new FormControl(5), username: new FormControl('Yangchen Hershey'), image: new FormControl("https://img.icons8.com/dusk/64/000000/test-account.png"), chat: new FormControl([['hi','sent','14:30'],['yo','received','14:35']]) }),
    new FormGroup({ id: new FormControl(6), username: new FormControl('Sheri Hermes'), image: new FormControl("https://img.icons8.com/dusk/64/000000/circled-user-female-skin-type-6.png"), chat: new FormControl([['hi','sent','14:30'],['yo','received','14:35']]) }),
    new FormGroup({ id: new FormControl(7), username: new FormControl('Habika Loesch'), image: new FormControl("https://img.icons8.com/dusk/64/000000/circled-user-female-skin-type-6.png"), chat: new FormControl([['hi','sent','14:30'],['yo','received','14:35']]) }),
    new FormGroup({ id: new FormControl(8), username: new FormControl('Aleron Shippy'), image: new FormControl("https://img.icons8.com/dusk/64/000000/test-account.png"), chat: new FormControl([['hi','sent','14:30'],['yo','received','14:35']]) }),
    new FormGroup({ id: new FormControl(9), username: new FormControl('Conroy Veith'), image: new FormControl("https://img.icons8.com/dusk/64/000000/test-account.png"), chat: new FormControl([['hi','received','14:30'],['yo','sent','14:35']]) }),
    new FormGroup({ id: new FormControl(10), username: new FormControl('Hahn Ferrante'), image: new FormControl("https://img.icons8.com/dusk/64/000000/test-account.png"), chat: new FormControl([['hi','sent','14:30'],['yo','received','14:35']]) })
  ]);

  msgtxt = '';

  constructor
    (
      private platform: Platform,
      private splashScreen: SplashScreen,
      private statusBar: StatusBar,
      private formBuilder: FormBuilder
    ) 
    {
      this.initializeApp();
    }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      contacts: this.contacts
    });
  }

  test(){
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sendMessage(event: any) {

    (this.contactForm.get("contacts") as FormArray).at(0).get("chat").value.push([this.msgtxt,'sent','10:30']);
    this.msgtxt='';
  }

  get contactsArray() : FormArray {
    return this.contactForm.get("contacts") as FormArray;
  }

  openConversation(i:any){
    console.log("Clicked = " + i);
    this.index = i;
  }

}
