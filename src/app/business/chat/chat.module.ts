import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ConversationComponent } from './conversation/conversation.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ChatComponent, ContactsComponent, ConversationComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ]
})
export class ChatModule { }
