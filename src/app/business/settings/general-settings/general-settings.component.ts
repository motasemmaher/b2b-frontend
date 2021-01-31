import { UserInfoService } from './../service/user-info.service';
import { ShowHidePasswordComponent } from './../../../shared/Show-Hide-Password/Show-Hide-Password.component';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn } from '@angular/forms';
import { SharedRoutingConstants } from '@app/core/constants/routes';
import { AppRoutingConstants, BusinessRoutingConstants, SettingsRoutingConstants } from './../../../core/constants/routes';
import { ActivatedRoute } from '@angular/router';
import { NavController, IonInput } from '@ionic/angular';
import { AppModule } from './../../../app.module';
import { AuthService } from '@app/core/services/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { Component, ContentChild, OnInit } from '@angular/core';
import data from '@app/business/home/data';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.css']
})
export class GeneralSettingsComponent implements OnInit {
  darkMode: boolean;
  isLoggedIn = true; //must be false
  role : string;
  selectedLanguage: string;

  userInfo: FormGroup;

  data: any;

  constructor(
    private translate: TranslateService,
    private authService: AuthService,
    private userInfoService: UserInfoService
    ) {

    if(localStorage.getItem('darkMode') === 'disabled'){
      this.darkMode = false;
    }
    else if(localStorage.getItem('darkMode') === 'enabled'){
      this.darkMode = true;
    }

    this.selectedLanguage = localStorage.getItem('language');

    this.userInfo = new FormGroup({
      username: new FormControl('asgregarg',
        Validators.compose([
          Validators.minLength(8),
          Validators.maxLength(64),
          Validators.required,
          this.customPatternValid({ pattern: /(^[\p{L}\d_]{8,64}$)/ugi , msg: 'INVALID_USERNAME'})
        ])
        ),
      fullName: new FormControl('adsfasdffd',
        Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(64),
          Validators.required,
          this.customPatternValid({ pattern: /(^[\p{L}\s]{3,64}$)/ugi , msg: 'INVALID_NAME'})
        ])),
      email: new FormControl('asd4r5er@fadf.com',
        Validators.compose([
          Validators.required,
          Validators.email,
          this.customPatternValid({ pattern: /(^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$)/ , msg: 'INVALID_EMAIL'})
        ])),
      address: new FormControl('asdfd',
        Validators.compose([
          Validators.minLength(5),
          Validators.maxLength(8),
          Validators.required,
          this.customPatternValid({ pattern: /(^[A-Z a-z ' -]{5,8}$)/ , msg: 'INVALID_ADDRESS'})
        ])),
      phoneNumber: new FormControl('0795486325',
        Validators.compose([
          Validators.required,
          this.customPatternValid({ pattern: /(^\d{10}$)/ , msg: 'MUST_BE_10_NUMBERS'}),
          this.customPatternValid({ pattern: /(^[0][7][789])/ , msg: 'MUST_START_WITH_(077_OR_078_OR_079)'})
        ])),
      password: new FormControl('asdfagha234',
        Validators.compose([
          Validators.minLength(8),
          Validators.maxLength(64),
          Validators.required,
          this.customPatternValid({ pattern: /(^.{8,64}$)/ , msg: 'INVALID_PASSWORD'})
        ])),
      role: new FormControl('')
     });
     
  }

  ngOnInit() {

    if (this.authService.loggedIn) {
      this.isLoggedIn = true;
    }
    this.role = this.authService.getRole();
    
  }

  toggleClicked(){

    this.darkMode = !this.darkMode;

    document.body.classList.toggle('dark');

    if(this.darkMode == true) {
      localStorage.setItem('darkMode' , 'enabled');
    }
    else if (this.darkMode == false){
      localStorage.setItem('darkMode' , 'disabled');
    }

  }

  onChange(value: any){
    localStorage.setItem('language', this.selectedLanguage);
    this.translate.use(this.selectedLanguage);
    
  }

  setUserInfo() {


    //console.log(this.userInfo.value);
  }

  public customPatternValid(config: any): ValidatorFn {
    return (control: FormControl) => {
      let urlRegEx: RegExp = config.pattern;
      if (control.value && !control.value.match(urlRegEx)) {
        return {
          invalidMsg: config.msg
        };
      } else {
        return null;
      }
    };
  }

}
