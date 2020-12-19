import { IonicModule, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingConstants, AppRoutingConstants, SharedRoutingConstants } from '@app/core/constants/routes';
import { AuthService } from '@app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginInfo: FormGroup;

  pathOfSignUpForCarOwner: string = `/${AppRoutingConstants.AUTH}/${AuthRoutingConstants.SIGN_UP}/${SharedRoutingConstants.CAR}/${AuthRoutingConstants.USER_INFO}`;
  pathOfSignUpForG1Owner: string = `/${AppRoutingConstants.AUTH}/${AuthRoutingConstants.SIGN_UP}/${SharedRoutingConstants.GARAGE}/${AuthRoutingConstants.USER_INFO}`;
  pathOfResetPassword: string = `/${AppRoutingConstants.AUTH}/${AuthRoutingConstants.RESET_PASSWORD}`;

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    public formBuilder: FormBuilder
  ) {
    this.loginInfo = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  loginFormLog() {
    console.log(this.loginInfo);
  }
}
