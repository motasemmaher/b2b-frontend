import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
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
            Validators.minLength(4),
            Validators.maxLength(64),
            //Validators.pattern(/(^[A-Z a-z \d\s-_']{4,64}$)/),
            Validators.required,
            this.customPatternValid({ pattern: /(^[\p{L} \d\s_'-]{4,64}$)/ugi , msg: 'invalid store name'})
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
            Validators.minLength(4),
            Validators.maxLength(8),
            //Validators.pattern(/(^[A-Z a-z ' -]{5,8}$)/),
            Validators.required,
            this.customPatternValid({ pattern: /(^[\p{L}'-]{4,8}$)/ugi , msg: 'invalid address'})
          ])
        ),
      location:
        new FormControl('',
          Validators.compose([
            Validators.minLength(5),
            Validators.maxLength(8),
            //Validators.pattern(/(^[A-Z a-z ' -]{5,8}$)/),
            // Validators.required,
            this.customPatternValid({ pattern: /(^[A-Z a-z ' -]{5,8}$)/ , msg: 'invalid location'})
          ])
        ),
      tags:
        new FormControl('',
          Validators.compose([
            Validators.minLength(2),
            Validators.maxLength(256),
            //Validators.pattern(/(^[A-Z a-z\s\d-,']{2,256}$)/),
            Validators.required,
            this.customPatternValid({ pattern: /(^[\p{L}\s\d',-]{2,256}$)/ugi , msg: 'invalid tags'})
          ])
        ),
      description:
        new FormControl('',
          Validators.compose([
            Validators.minLength(8),
            Validators.maxLength(512),
            //Validators.pattern(/(^[A-Z a-z \d\s-_.']{8,512}$)/),
            Validators.required,
            this.customPatternValid({ pattern: /(^[\p{L}\d\s_\.'-]{8,512}$)/ugi , msg: 'invalid description'})
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

  public customPatternValid(config: any): ValidatorFn {
    return (control: FormControl) => {
      let urlRegEx: RegExp = config.pattern;
      if (control.value && !control.value.match(urlRegEx)) {
        return {
          invalidMsg: config.msg
        };
      } else {
        return null;
      }
    };
  }
}

