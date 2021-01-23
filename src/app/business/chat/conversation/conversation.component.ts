import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { IonContent, NavController } from '@ionic/angular';
import { ChatService } from '../service/chat.service';
import { AuthService } from '@app/core/services/auth/auth.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css'],
})
export class ConversationComponent implements OnInit {
  index = 0;
  message: string;
  conversationId; string;
  messages: any[];
  chatId: string;
  conversationInfo: any;
  userInfo: any;

  @ViewChild(IonContent) content: IonContent;

  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private chat: ChatService,
    private auth: AuthService,
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.conversationId = params.conversationId;
      this.messages = [];
      this.conversationInfo = {};
      this.getContact();
      this.userInfo = this.auth.userInfo();
      this.getconversationInfoUser();
    });
  }

  ngOnInit(): void {
    this.chat.initChat();
  }


  getContact() {
    this.chat.getContact(this.conversationId).subscribe(res => {
      console.log(res);
      this.chatId = res.contactBetween;
      this.messages = [...res.messages];
    });
  }

  getconversationInfoUser() {
    console.log(this.conversationId)
    this.chat.conversationInfo(this.conversationId).subscribe(res => {
      this.conversationInfo = res.user;
    });
  }

  sendMessage() {
    const msg = {
      text: this.message,
      date: new Date(),
      reply: false,
      user: {
        name: this.userInfo.username,
        receiver: this.userInfo._id,
        sender: this.userInfo._id
      },
    };
    this.messages.push(msg);
    this.chat.sendMessage(msg, this.userInfo._id, this.userInfo._id);
  }


  goBack() {
    this.navCtrl.back();
  }

  scrollBottom() {
    this.content.scrollToBottom(500);
  }

  scrollToBottomOnInit() {
    this.scrollBottom();
  }

}
