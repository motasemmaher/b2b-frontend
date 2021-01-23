import { UserInfoService } from './../service/user-info.service';
import { ShowHidePasswordComponent } from './../../../shared/Show-Hide-Password/Show-Hide-Password.component';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SharedRoutingConstants } from '@app/core/constants/routes';
import { AppRoutingConstants, BusinessRoutingConstants, SettingsRoutingConstants } from './../../../core/constants/routes';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AppModule } from './../../../app.module';
import { AuthService } from '@app/core/services/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
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
    private userInfoService: UserInfoService,
    private formBuilder: FormBuilder
    ) {

    if(localStorage.getItem('darkMode') === 'disabled'){
      this.darkMode = false;
    }
    else if(localStorage.getItem('darkMode') === 'enabled'){
      this.darkMode = true;
    }

    this.selectedLanguage = localStorage.getItem('language');

  }

  ngOnInit() {

    if (this.authService.loggedIn) {
      this.isLoggedIn = true;
    }
    this.role = this.authService.getRole();

    this.data = this.userInfoService.getUserInfo(0).subscribe((res) => {
      console.log(res);
    })

    this.userInfo = this.formBuilder.group({
      username: new FormControl('asgregarg',
        Validators.compose([
          Validators.minLength(8),
          Validators.maxLength(64),
          Validators.pattern(/(^[A-Z a-z \s]{3,64}$)/),
          Validators.required
        ])),
      fullName: new FormControl('adsfasdffd',
        Validators.compose([
          Validators.minLength(8),
          Validators.maxLength(64),
          Validators.pattern(/(^[A-Z a-z \d_]{8,64}$)/),
          Validators.required
        ])),
      email: new FormControl('asd4r5er@fadf',
        Validators.compose([
          Validators.pattern('^[a-z0-9_\.-]*@[\da-z]*\.[a-z]{2,6}$'),
          Validators.required
        ])),
        address:
        new FormControl('asdfd',
          Validators.compose([
            Validators.pattern(/(^[A-Z a-z ' -]{5,8}$)/),
            Validators.required
          ])
        ),
      phoneNumber: new FormControl('0795486325',
        Validators.compose([
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern(/(^[0][7][789]\d{7}$)/),
          Validators.required
        ])),
      password: new FormControl('asdfagha234',
        Validators.compose([
          Validators.minLength(8),
          Validators.maxLength(64),
          Validators.pattern(/(.{8,64})/),
          Validators.required
        ])),
      role: new FormControl('')
     });
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
    /* this.userInfoService.setUserInfo(0,this.userInfo.value).subscribe((res) => {
      console.log(res);
    }) */

    console.log(this.userInfo.value);
  }


}
