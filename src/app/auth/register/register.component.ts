import { AuthService } from './../services/auth.service';
import { IonicModule, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private navCtrl: NavController,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  nextCreateAccount(form: NgForm) {
    this.authService.register(form.value.userName, form.value.fullName, form.value.email, form.value.password);

    if (form.value.OwnerType === 'GarageOwnerAccount'){
    this.navCtrl.navigateRoot('auth/createGarageOwner');
    }
    else if (form.value.OwnerType === 'CarOwnerAccount'){
      this.navCtrl.navigateRoot('auth/createCarOwner');
    }
    console.log(form.value);
  }

  /* signUp (form: NgForm){

    if(form.value.){
      this.authService.createGarageOwner();
    }

  }
 */

}
