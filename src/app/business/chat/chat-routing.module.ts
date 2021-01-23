import { MobileComponent } from './mobile/mobile.component';
import { DesktopComponent } from './desktop/desktop.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './chat.component';
import { ConversationComponent } from './conversation/conversation.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {
    path: '',
    component: ChatComponent,
    children: [
      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: 'm'
      // },
      // {
      //   path: 'm',
      //   component: ContactsComponent,
      // },
      {
        path: ':conversationId',
        component: ConversationComponent,
      },
      // {
      //   path: 'd',
      //   component: ContactsComponent,
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
