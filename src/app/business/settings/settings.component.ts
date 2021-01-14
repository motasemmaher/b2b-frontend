import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  darkMode = false;

  constructor() {}

  ngOnInit(): void {
  }

  toggleClicked(){
    this.darkMode = !this.darkMode;
    console.log(this.darkMode);
    //window.matchMedia('prefers-color-scheme: dark')

    document.body.classList.toggle('dark');
    
    this.ngOnInit();
  }


}
