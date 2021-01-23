import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent implements OnInit {

  contacts: any[];
  constructor(private chatService: ChatService) {
    this.contacts = [];
    this.getContacts();
  }

  ngOnInit(): void {
  }

  getContacts() {
    this.chatService.getContacts().subscribe((res) => {
      this.contacts = res.contacts;
    });
  }

  openChat(index: number) {

  }
}
