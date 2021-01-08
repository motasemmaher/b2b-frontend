import { MobileComponent } from './mobile/mobile.component';
import { DesktopComponent } from './desktop/desktop.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './chat.component';
import { ConversationComponent } from './conversation/conversation.component';

const routes: Routes = [
  {
    path: '',
    component: ChatComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'm'
      },
      {
        path: 'm',
        component: MobileComponent,
      },
      {
        path: 'conversations/:userId',
        component: ConversationComponent,
      },
      {
        path: 'd',
        component: DesktopComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
