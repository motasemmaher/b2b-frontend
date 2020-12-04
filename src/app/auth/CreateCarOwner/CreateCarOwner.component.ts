import { AuthService } from './../services/auth.service';
import { IonSlides, NavController } from '@ionic/angular';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-CreateCarOwner',
  templateUrl: './CreateCarOwner.component.html',
  styleUrls: ['./CreateCarOwner.component.scss']
})
export class CreateCarOwnerComponent implements OnInit {
  createCarOwnerInfo1: FormGroup;
  createCarOwnerInfo2: FormGroup;

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    public formBuilder: FormBuilder
  ) {
    this.createCarOwnerInfo1 = this.formBuilder.group({
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
    this.createCarOwnerInfo2 = this.formBuilder.group({
      carModel: [
        '',
        Validators.compose([
          Validators.minLength(8),
          Validators.maxLength(100),
          Validators.pattern('[a-zA-Z_ 0-9]*'),
          Validators.required
        ])
      ],
      carMake: [
        '',
        Validators.compose([
          Validators.minLength(8),
          Validators.maxLength(100),
          Validators.pattern('[a-zA-Z_ 0-9]*'),
          Validators.required
        ])
      ],
      carYear: ['', Validators.required]
    });
  }

  @ViewChild('slider') slider: IonSlides;

  public slideOpts = {
    allowTouchMove: false,
    autoplay: false,
  };

  ngOnInit() {
  }

  registerFormLog1() {
    console.log(this.createCarOwnerInfo1);
  }

  registerFormLog2() {
    console.log(this.createCarOwnerInfo2);
  }

  /* signUp(form: NgForm){
    this.navCtrl.navigateRoot('folder/inbox');
  } */

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
