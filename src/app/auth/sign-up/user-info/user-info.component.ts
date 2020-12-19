import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SignUpInfoService } from '@app/core/services/sign-up/sign-up-info.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  userInfo: FormGroup;

  constructor(private signUpInfoService: SignUpInfoService) {
    this.userInfo = this.signUpInfoService.getUserInfoData();
  }
  
  ngOnInit(): void {
  }
}