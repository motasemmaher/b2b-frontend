import { IonContent } from '@ionic/angular';
import { FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {

  messages: any[];
  index = 0;

  contactForm: FormGroup;
  contacts: any [];

  msgtxt = '';

  @ViewChild(IonContent) content: IonContent;

  constructor(private formBuilder: FormBuilder, private chatService: ChatService) { }

  ngOnInit() {
    this.contacts = [];
    this.getContact();
  }

  sendMessage(event: any) {
    (this.contactForm.get('contacts') as FormArray).at(this.index).get('chat').value.push([this.msgtxt, 'sent', new Date().toTimeString().substr(0, 5)]);
    this.msgtxt = '';

    this.scrollBottom();
  }

  get contactsArray(): FormArray {
    return this.contactForm.get('contacts') as FormArray;
  }

  openConversation(i: any) {
    console.log('Clicked = ' + i);
    this.index = i;
  }

  get staticIndex() {
    return this.index;
  }

  scrollBottom() {
    this.content.scrollToBottom(500);
  }


  getContact() {
    this.chatService.getContacts().subscribe((res) => {
      this.contacts = res.contacts;
    });
  }

}
