import { IonContent } from '@ionic/angular';
import { FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {

  messages: any[];
  index = 0;

  contactForm: FormGroup;
  contacts: FormArray = new FormArray([
    new FormGroup({ id: new FormControl(0), username: new FormControl('Ibrahim Sisneros'), image: new FormControl('https://img.icons8.com/dusk/64/000000/test-account.png'), chat: new FormControl([['hi', 'sent', '14:30'], ['yo', 'received', '14:35']]) }),
    new FormGroup({ id: new FormControl(1), username: new FormControl('Kamil Strouse'), image: new FormControl('https://img.icons8.com/dusk/64/000000/test-account.png'), chat: new FormControl([['hi', 'received', '14:30'], ['yo', 'sent', '14:35']]) }),
    new FormGroup({ id: new FormControl(2), username: new FormControl('Drury Verde'), image: new FormControl('https://img.icons8.com/dusk/64/000000/test-account.png'), chat: new FormControl([['hi', 'sent', '14:30'], ['yo', 'received', '14:35']]) }),
    new FormGroup({ id: new FormControl(3), username: new FormControl('Ademaro Strouse'), image: new FormControl('https://img.icons8.com/dusk/64/000000/test-account.png'), chat: new FormControl([['hi', 'sent', '14:30'], ['yo', 'received', '14:35']]) }),
    new FormGroup({ id: new FormControl(4), username: new FormControl('Syna Hermes'), image: new FormControl('https://img.icons8.com/dusk/64/000000/circled-user-female-skin-type-6.png'), chat: new FormControl([['hi', 'sent', '14:30'], ['yo', 'received', '14:35']]) }),
    new FormGroup({ id: new FormControl(5), username: new FormControl('Yangchen Hershey'), image: new FormControl('https://img.icons8.com/dusk/64/000000/test-account.png'), chat: new FormControl([['hi', 'sent', '14:30'], ['yo', 'received', '14:35']]) }),
    new FormGroup({ id: new FormControl(6), username: new FormControl('Sheri Hermes'), image: new FormControl('https://img.icons8.com/dusk/64/000000/circled-user-female-skin-type-6.png'), chat: new FormControl([['hi', 'sent', '14:30'], ['yo', 'received', '14:35']]) }),
    new FormGroup({ id: new FormControl(7), username: new FormControl('Habika Loesch'), image: new FormControl('https://img.icons8.com/dusk/64/000000/circled-user-female-skin-type-6.png'), chat: new FormControl([['hi', 'sent', '14:30'], ['yo', 'received', '14:35']]) }),
    new FormGroup({ id: new FormControl(8), username: new FormControl('Aleron Shippy'), image: new FormControl('https://img.icons8.com/dusk/64/000000/test-account.png'), chat: new FormControl([['hi', 'sent', '14:30'], ['yo', 'received', '14:35']]) }),
    new FormGroup({ id: new FormControl(9), username: new FormControl('Conroy Veith'), image: new FormControl('https://img.icons8.com/dusk/64/000000/test-account.png'), chat: new FormControl([['hi', 'received', '14:30'], ['yo', 'sent', '14:35']]) }),
    new FormGroup({ id: new FormControl(10), username: new FormControl('Hahn Ferrante'), image: new FormControl('https://img.icons8.com/dusk/64/000000/test-account.png'), chat: new FormControl([['hi', 'sent', '14:30'], ['yo', 'received', '14:35']]) })
  ]);

  msgtxt = '';

  @ViewChild(IonContent) content: IonContent;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      contacts: this.contacts
    });
  }

  sendMessage(event: any) {

    (this.contactForm.get('contacts') as FormArray).at(this.index).get('chat').value.push([this.msgtxt, 'sent', new Date().toTimeString().substr(0, 5)]);
    this.msgtxt = '';

    this.scrollBottom();
  }

  get contactsArray(): FormArray {
    return this.contactForm.get('contacts') as FormArray;
  }

  openConversation(i: any){
    console.log('Clicked = ' + i);
    this.index = i;
  }

  get staticIndex() {
    return this.index;
  }

  scrollBottom(){
    this.content.scrollToBottom(500);
  }

}
