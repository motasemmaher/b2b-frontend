import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpInfoService } from '@app/core/services/sign-up/sign-up-info.service';
import { AuthRoutingConstants, AppRoutingConstants, SharedRoutingConstants } from '@app/core/constants/routes';

@Component({
  selector: 'app-manageCarOwner',
  templateUrl: './manageCarOwner.component.html',
  styleUrls: ['./manageCarOwner.component.scss']
})
export class ManageCarOwnerComponent implements OnInit {
  carInfo: FormGroup;

  constructor(
    private signUpInfoService: SignUpInfoService,
    private router: Router,

  ) {
   if (this.signUpInfoService.getUserInfoData().invalid) {
     this.router.navigateByUrl(`${AppRoutingConstants.AUTH}/${AuthRoutingConstants.SIGN_UP}/${SharedRoutingConstants.CAR}/${AuthRoutingConstants.USER_INFO}`);
     return;
   }
  }

  ngOnInit() {
    this.carInfo = this.signUpInfoService.getCarInfoData();
  }
}
