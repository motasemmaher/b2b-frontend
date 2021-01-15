import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SignUpInfoService } from '@app/core/services/sign-up/sign-up-info.service';
import { Router } from '@angular/router';
import { AuthRoutingConstants, AppRoutingConstants, SharedRoutingConstants } from '@app/core/constants/routes';

@Component({
  selector: 'app-manageGarageOwner',
  templateUrl: './manageGarageOwner.component.html',
  styleUrls: ['./manageGarageOwner.component.scss']
})
export class ManageGarageOwnerComponent implements OnInit {
  storeInfo: FormGroup;

  constructor(
    private signUpInfoService: SignUpInfoService,
    private router: Router,
  ) {
    if (this.signUpInfoService.getUserInfoData().invalid) {
      this.router.navigateByUrl(`${AppRoutingConstants.AUTH}/${AuthRoutingConstants.SIGN_UP}/${SharedRoutingConstants.GARAGE}/${AuthRoutingConstants.USER_INFO}`);
      return;
    }
  }

  ngOnInit() {
    this.storeInfo = this.signUpInfoService.getGarageInfoData();
  }

  getImageAsBase64(value) {
    this.storeInfo.patchValue({ image: value });
  }
}
