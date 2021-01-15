import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AppModule } from './../../../app.module';
import { AuthService } from '@app/core/services/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.css']
})
export class GeneralSettingsComponent implements OnInit {
  darkMode: boolean;
  isLoggedIn = false;
  role : string;
  selectedLanguage: string;

  constructor(
    private translate: TranslateService,
    private authService: AuthService,
    private navCtrl: NavController
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

  refresh(){
    
    
    console.log('works');
  }

}
