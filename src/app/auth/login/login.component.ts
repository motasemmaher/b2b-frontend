import { TranslateService } from '@ngx-translate/core';
import { IonicModule, NavController } from '@ionic/angular';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { AuthRoutingConstants, AppRoutingConstants, SharedRoutingConstants } from '@app/core/constants/routes';
import { AuthService } from '@app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginInfo: FormGroup;

  pathOfSignUpForCarOwner = `/${AppRoutingConstants.AUTH}/${AuthRoutingConstants.SIGN_UP}/${SharedRoutingConstants.CAR}/${AuthRoutingConstants.USER_INFO}`;
  pathOfSignUpForG1Owner = `/${AppRoutingConstants.AUTH}/${AuthRoutingConstants.SIGN_UP}/${SharedRoutingConstants.GARAGE}/${AuthRoutingConstants.USER_INFO}`;
  pathOfResetPassword = `/${AppRoutingConstants.AUTH}/${AuthRoutingConstants.RESET_PASSWORD}`;
  listenOnErrorLogin: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    public formBuilder: FormBuilder,
    private translate: TranslateService
  ) {
    this.loginInfo = this.formBuilder.group({
      username: new FormControl('',
      Validators.compose([
        Validators.minLength(8),
        Validators.maxLength(64),
        Validators.pattern(/(^[A-Z a-z \s]{3,64}$)/),
        Validators.required
      ])),
      password: new FormControl('',
      Validators.compose([
        Validators.minLength(8),
        Validators.maxLength(64),
        Validators.pattern(/(.{8,64})/),
        Validators.required
      ])),
    rememberMe: new FormControl(false),
    });


  }

  ngOnInit() {
  }

  loginFormLog() {
    if (this.loginInfo.valid) {
      this.authService.login(this.loginInfo.value);
    }
  }
}
