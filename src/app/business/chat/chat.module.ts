import { DesktopComponent } from './desktop/desktop.component';
import { MobileComponent } from './mobile/mobile.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { ConversationComponent } from './conversation/conversation.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutosizeModule } from 'ngx-autosize';


@NgModule({
  declarations: [ChatComponent, ConversationComponent, MobileComponent, DesktopComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    AutosizeModule
  ]
})
export class ChatModule { }
