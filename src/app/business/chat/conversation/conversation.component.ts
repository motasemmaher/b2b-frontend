import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { IonContent, NavController } from '@ionic/angular';
// import { ChatShowcaseService } from './chat-showcase.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConversationComponent implements OnInit {
  index = 0;

  contactForm: FormGroup;
  contacts: FormArray = new FormArray([
    new FormGroup({ id: new FormControl(0), username: new FormControl('Ibrahim Sisneros'), image: new FormControl("https://img.icons8.com/dusk/64/000000/test-account.png"), chat: new FormControl([['hi','sent','14:30'],['yo','received','14:35'],['yo','received','14:35'],['yo','received','14:35'],['yo','received','14:35'],['yo','received','14:35'],['yo','received','14:35'],['yo','received','14:35'],['yo','received','14:35'],['yo','received','14:35'],['yo','received','14:35'],['yo','received','14:35'],['yo','received','14:35'],['yo','received','14:35'],['yo','received','14:35'],['yo','received','14:35']]) }),
    new FormGroup({ id: new FormControl(1), username: new FormControl('Kamil Strouse'), image: new FormControl("https://img.icons8.com/dusk/64/000000/test-account.png"), chat: new FormControl([['hi','received','14:30'],['yo','sent','14:35']]) }),
    new FormGroup({ id: new FormControl(2), username: new FormControl('Drury Verde'), image: new FormControl("https://img.icons8.com/dusk/64/000000/test-account.png"), chat: new FormControl([['hi','sent','14:30'],['yo','received','14:35']]) }),
    new FormGroup({ id: new FormControl(3), username: new FormControl('Ademaro Strouse'), image: new FormControl("https://img.icons8.com/dusk/64/000000/test-account.png"), chat: new FormControl([['hi','sent','14:30'],['yo','received','14:35']]) }),
    new FormGroup({ id: new FormControl(4), username: new FormControl('Syna Hermes'), image: new FormControl("https://img.icons8.com/dusk/64/000000/circled-user-female-skin-type-6.png"), chat: new FormControl([['hi','sent','14:30'],['yo','received','14:35']]) }),
    new FormGroup({ id: new FormControl(5), username: new FormControl('Yangchen Hershey'), image: new FormControl("https://img.icons8.com/dusk/64/000000/test-account.png"), chat: new FormControl([['hi','sent','14:30'],['yo','received','14:35']]) }),
    new FormGroup({ id: new FormControl(6), username: new FormControl('Sheri Hermes'), image: new FormControl("https://img.icons8.com/dusk/64/000000/circled-user-female-skin-type-6.png"), chat: new FormControl([['hi','sent','14:30'],['yo','received','14:35']]) }),
    new FormGroup({ id: new FormControl(7), username: new FormControl('Habika Loesch'), image: new FormControl("https://img.icons8.com/dusk/64/000000/circled-user-female-skin-type-6.png"), chat: new FormControl([['hi','sent','14:30'],['yo','received','14:35']]) }),
    new FormGroup({ id: new FormControl(8), username: new FormControl('Aleron Shippy'), image: new FormControl("https://img.icons8.com/dusk/64/000000/test-account.png"), chat: new FormControl([['hi','sent','14:30'],['yo','received','14:35']]) }),
    new FormGroup({ id: new FormControl(9), username: new FormControl('Conroy Veith'), image: new FormControl("https://img.icons8.com/dusk/64/000000/test-account.png"), chat: new FormControl([['hi','received','14:30'],['yo','sent','14:35']]) }),
    new FormGroup({ id: new FormControl(10), username: new FormControl('Hahn Ferrante'), image: new FormControl("https://img.icons8.com/dusk/64/000000/test-account.png"), chat: new FormControl([['hi','sent','14:30'],['yo','received','14:35']]) })
  ]);

  msgtxt = '';

  @ViewChild(IonContent) content: IonContent;

  constructor(private formBuilder: FormBuilder, private route:ActivatedRoute, private navCtrl: NavController) {
    this.index = parseInt(this.route.snapshot.paramMap.get('userId'));
  }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      contacts: this.contacts
    });
    /* setTimeout(() => {
      this.content.scrollToBottom(200);
    }); */
    /* this.scrollToBottomOnInit(); */
    
  }

  sendMessage(event: any) {

    (this.contactForm.get("contacts") as FormArray).at(this.index).get("chat").value.push([this.msgtxt,'sent', new Date().toTimeString().substr(0,5)]);
    this.msgtxt='';
/*     const files = !event.files ? [] : event.files.map((file) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'file-text-outline',
      };
    });

    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: true,
      type: files.length ? 'file' : 'text',
      files,
      user: {
        name: 'Jonh Doe',
        avatar: 'https://i.gifer.com/no.gif',
      },
    }); */

    this.scrollBottom();
  }

  get contactsArray() : FormArray {
    return this.contactForm.get("contacts") as FormArray;
  }

  goBack(){
    this.navCtrl.back();
  }

  scrollBottom(){
    this.content.scrollToBottom(500);
  }

  scrollToBottomOnInit() {
    this.scrollBottom()
  }

}
