import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent implements OnInit {

  contacts: any[];
  // tslint:disable-next-line: no-output-rename
  @Output('selectedContacts') contactSelect: EventEmitter<any> = new EventEmitter();

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
    this.contactSelect.emit(this.contacts[index]);
  }
}
