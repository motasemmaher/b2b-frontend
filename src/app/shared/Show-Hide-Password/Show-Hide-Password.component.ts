import { Component, ContentChild, OnInit } from '@angular/core';
import { IonInput, IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-Show-Hide-Password',
  templateUrl: './Show-Hide-Password.component.html',
  styleUrls: ['./Show-Hide-Password.component.css']
})
export class ShowHidePasswordComponent implements OnInit {
  showPassword = false;

  @ContentChild(IonInput) input: IonInput;

  constructor() { }

  ngOnInit() {
  }

  toggleShow(){
    this.showPassword = !this.showPassword;
    this.input.type = this.showPassword ? 'text' : 'password';
  }

}
