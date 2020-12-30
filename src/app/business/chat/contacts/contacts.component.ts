import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormGroupDirective, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { ConversationComponent } from '../conversation/conversation.component';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent implements OnInit {
  index = 0;

  contactForm: FormGroup;
  contacts: FormArray = new FormArray([
    new FormGroup({ id: new FormControl(0), username: new FormControl('Ibrahim Sisneros'), image: new FormControl("https://img.icons8.com/dusk/64/000000/test-account.png"), chat: new FormControl([['hi','sent','14:30'],['yo','received','14:35']]) }),
    new FormGroup({ id: new FormControl(1), username: new FormControl('Kamil Strouse'), image: new FormControl("https://img.icons8.com/dusk/64/000000/test-account.png"), chat: new FormControl([['hi','sent','14:30'],['yo','received','14:35']]) }),
    new FormGroup({ id: new FormControl(2), username: new FormControl('Drury Verde'), image: new FormControl("https://img.icons8.com/dusk/64/000000/test-account.png"), chat: new FormControl([['hi','sent','14:30'],['yo','received','14:35']]) }),
    new FormGroup({ id: new FormControl(3), username: new FormControl('Ademaro Strouse'), image: new FormControl("https://img.icons8.com/dusk/64/000000/test-account.png"), chat: new FormControl([['hi','sent','14:30'],['yo','received','14:35']]) }),
    new FormGroup({ id: new FormControl(4), username: new FormControl('Syna Hermes'), image: new FormControl("https://img.icons8.com/dusk/64/000000/circled-user-female-skin-type-6.png"), chat: new FormControl([['hi','sent','14:30'],['yo','received','14:35']]) }),
    new FormGroup({ id: new FormControl(5), username: new FormControl('Yangchen Hershey'), image: new FormControl("https://img.icons8.com/dusk/64/000000/test-account.png"), chat: new FormControl([['hi','sent','14:30'],['yo','received','14:35']]) }),
    new FormGroup({ id: new FormControl(6), username: new FormControl('Sheri Hermes'), image: new FormControl("https://img.icons8.com/dusk/64/000000/circled-user-female-skin-type-6.png"), chat: new FormControl([['hi','sent','14:30'],['yo','received','14:35']]) }),
    new FormGroup({ id: new FormControl(7), username: new FormControl('Habika Loesch'), image: new FormControl("https://img.icons8.com/dusk/64/000000/circled-user-female-skin-type-6.png"), chat: new FormControl([['hi','sent','14:30'],['yo','received','14:35']]) }),
    new FormGroup({ id: new FormControl(8), username: new FormControl('Aleron Shippy'), image: new FormControl("https://img.icons8.com/dusk/64/000000/test-account.png"), chat: new FormControl([['hi','sent','14:30'],['yo','received','14:35']]) }),
    new FormGroup({ id: new FormControl(9), username: new FormControl('Conroy Veith'), image: new FormControl("https://img.icons8.com/dusk/64/000000/test-account.png"), chat: new FormControl([['hi','sent','14:30'],['yo','received','14:35']]) }),
    new FormGroup({ id: new FormControl(10), username: new FormControl('Hahn Ferrante'), image: new FormControl("https://img.icons8.com/dusk/64/000000/test-account.png"), chat: new FormControl([['hi','sent','14:30'],['yo','received','14:35']]) })
  ]);

  constructor(private formBuilder: FormBuilder, public navCtrl: NavController, private router: Router) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      contacts: this.contacts
    });
  }

  get contactsArray() : FormArray {
    return this.contactForm.get("contacts") as FormArray;
  }

  openChat(i:any){
    console.log("Clicked = " + i);
    this.index = i;
    //router.navigate(['user', user.id, 'details']);
    /* this.navCtrl.navigateForward('/business/chat/conversations/' + this.index);
    this.router.navigateByUrl('/business/chat/conversations/' + this.index); */
    //this.selectedContact = this.contactForm.get("contacts").get(i).value;
  }

}

