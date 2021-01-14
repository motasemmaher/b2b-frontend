import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MyStoresService } from '../services/my-stores.service';
import { convertFrom24To12Hour } from '@app/shared/functions/convertTime';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddStoreComponent implements OnInit {

  newStore: FormGroup;

  constructor(
    private myStoresService: MyStoresService,
  ) { 
    this.newStore = new FormGroup({
      name:
        new FormControl('',
          Validators.compose([
            Validators.minLength(8),
            Validators.maxLength(64),
            Validators.pattern(/(^[A-Z a-z \d\s-_']{4,64}$)/),
            Validators.required
          ])
        ),
      openTime:
        new FormControl('',
          Validators.compose([
            // Validators.pattern('[a-zA-Z_ ]*'),
            Validators.required
          ])
        ),
      closeTime:
        new FormControl('',
          Validators.compose([
            // Validators.pattern('[a-zA-Z_ ]*'),
            Validators.required
          ])
        ),
      address:
        new FormControl('asfsd',
          Validators.compose([
            Validators.pattern(/(^[A-Z a-z ' -]{5,8}$)/),
            Validators.required
          ])
        ),
      location:
        new FormControl('',
          Validators.compose([
            Validators.pattern(/(^[A-Z a-z ' -]{5,8}$)/),
            // Validators.required
          ])
        ),
      tags:
        new FormControl('',
          Validators.compose([
            Validators.pattern(/(^[A-Z a-z\s\d-,']{2,256}$)/),
            Validators.required
          ])
        ),
      description:
        new FormControl('',
          Validators.compose([
            Validators.pattern(/(^[A-Z a-z \d\s-_.']{8,512}$)/),
            Validators.required
          ])
        ),
      image: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  getImageAsBase64(value) {
    this.newStore.patchValue({ image: value });
  }

  manipulateDataBeforeSending(data) {
    data.openTime = convertFrom24To12Hour(data.openTime.toString().split('T')[1].split('.')[0]);
    data.closeTime = convertFrom24To12Hour(data.closeTime.toString().split('T')[1].split('.')[0]);
    return data;
  }

  addNewStore() {
    if (this.newStore.valid) {
      const data = this.manipulateDataBeforeSending(JSON.parse(JSON.stringify(this.newStore.value)))
      
      this.myStoresService.addNewStore(data).subscribe((res) => {
        console.log(res);
      })
    }
  }
}

