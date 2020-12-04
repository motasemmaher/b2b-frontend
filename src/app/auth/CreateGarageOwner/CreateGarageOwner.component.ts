import { AuthService } from './../services/auth.service';
import { IonSlides, NavController } from '@ionic/angular';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-CreateGarageOwner',
  templateUrl: './CreateGarageOwner.component.html',
  styleUrls: ['./CreateGarageOwner.component.scss']
})
export class CreateGarageOwnerComponent implements OnInit {
  userInfo: FormGroup;
  storeInfo: FormGroup;

  constructor(
    private navCtrl: NavController,
    private authServic: AuthService,
    public formBuilder: FormBuilder
  ) {
    this.userInfo = this.formBuilder.group({
      userName: [
        '',
        Validators.compose([
          Validators.minLength(8),
          Validators.maxLength(64),
          Validators.pattern('[0-9a-z-A-Z-_]*'),
          Validators.required
        ])
      ],
      fullName: [
        '',
        Validators.compose([
          Validators.minLength(8),
          Validators.maxLength(64),
          Validators.pattern('[a-zA-Z_ ]*'),
          Validators.required
        ])
      ],
      email: [
        '',
        Validators.compose([
          Validators.pattern('^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$'),
          Validators.required
        ])
      ],
      phoneNumber: [
        '',
        Validators.compose([
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('^07[789][0-9]+'),
          Validators.required
        ])
      ],
      password: [
        '',
        Validators.compose([
          Validators.minLength(8),
          Validators.maxLength(64),
          Validators.pattern('[0-9a-z-A-Z@.#*$!?&+-/]*'),
          Validators.required
        ])
      ],
    });
    this.storeInfo = this.formBuilder.group({
      storeName: [
        '',
        Validators.compose([
          Validators.minLength(8),
          Validators.maxLength(64),
          Validators.pattern('[a-zA-Z_ ]*'),
          Validators.required
        ])
      ],
      numberOfStores: ['', Validators.required],
      openTime: ['', Validators.required],
      closeTime: ['', Validators.required],
      address: ['', Validators.required],
      discription: [
        '',
        Validators.compose([
          Validators.pattern('[a-zA-Z_ 0-9]*'),
          Validators.required
        ])
      ]
    });
  }

  @ViewChild('slider') slider: IonSlides;

  public slideOpts = {
    allowTouchMove: false,
    autoplay: false
  };

  ngOnInit() {
  }

  registerFormLog1() {
    console.log(this.userInfo);
  }

  registerFormLog2() {
    console.log(this.storeInfo);
  }

  signUp(form: NgForm){
    console.log(form.value);
    //this.authService.createGarageOwner(form.value.nameOfStore, form.value.storeName, form.value.discription);
    ////this.navCtrl.navigateRoot('folder/inbox');
    //this.navCtrl.navigateRoot('auth/login');
  }

  swipeNext() {
    this.slider.slideNext();
  }

  backToLogin() {
    this.navCtrl.navigateRoot('auth/login')
  }

  back(){
    this.slider.slidePrev();
  }

}
