import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MyStoresService } from '../services/my-stores.service';
import { convertFrom24To12Hour } from '@app/shared/functions/convertTime';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-store',
  templateUrl: './manage-store-info.component.html',
  styleUrls: ['./manage-store-info.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageStoreInfoComponent implements OnInit {

  newStore: FormGroup;
  storeId?: string;
  pageName: string = 'Add New Store';

  constructor(
    private myStoresService: MyStoresService,
    private activatedRoute: ActivatedRoute,
  ) {

    this.activatedRoute.params.subscribe(params => {
      this.storeId = params.storeId;
      // this.isFetching = true;
      if (this.storeId) {
        this.pageName = 'Edit Store'
        this.myStoresService.getMyStore(this.storeId).subscribe(res => {
          this.createStoreStructure(res);
        });
      } else {
        this.createStoreStructure();
      }
    });
  }

  ngOnInit(): void {
  }

  createStoreStructure(data?: any) {
    this.newStore = new FormGroup({
      name:
        new FormControl(data?.name || '',
          Validators.compose([
            Validators.minLength(8),
            Validators.maxLength(64),
            Validators.pattern(/(^[A-Z a-z \d\s-_']{4,64}$)/),
            Validators.required
          ])
        ),
      openTime:
        new FormControl(new Date(`11/11/2020 ${data?.openTime}`).toString() ||'',
          Validators.compose([
            // Validators.pattern('[a-zA-Z_ ]*'),
            Validators.required
          ])
        ),
      closeTime:
        new FormControl(new Date(`11/11/2020 ${data?.closeTime}`).toString() || '',
          Validators.compose([
            // Validators.pattern('[a-zA-Z_ ]*'),
            Validators.required
          ])
        ),
      address:
        new FormControl(data?.address || 'testr',
          Validators.compose([
            Validators.pattern(/(^[A-Z a-z ' -]{5,8}$)/),
            Validators.required
          ])
        ),
      location:
        new FormControl(data?.location || '',
          Validators.compose([
            Validators.pattern(/(^[A-Z a-z ' -]{5,8}$)/),
            // Validators.required
          ])
        ),
      tags:
        new FormControl(data?.tags || '',
          Validators.compose([
            Validators.pattern(/(^[A-Z a-z\s\d-,']{2,256}$)/),
            Validators.required
          ])
        ),
      description:
        new FormControl(data?.description || '',
          Validators.compose([
            Validators.pattern(/(^[A-Z a-z \d\s-_.']{8,512}$)/),
            Validators.required
          ])
        ),
      image: new FormControl(data?.image || ''),
    });
  }
  getImageAsBase64(value) {
    this.newStore.patchValue({ image: value });
  }

  manipulateDataBeforeSending(data) {
    data.openTime = convertFrom24To12Hour(data.openTime.toString().split('T')[1].split('.')[0]);
    data.closeTime = convertFrom24To12Hour(data.closeTime.toString().split('T')[1].split('.')[0]);
    return data;
  }

  manageStore() {
    if (this.storeId) {
      this.editStore();
    } else {
      this.addNewStore();
    }
  }
  addNewStore() {
    if (this.newStore.valid) {
      const data = this.manipulateDataBeforeSending(JSON.parse(JSON.stringify(this.newStore.value)))

      this.myStoresService.addNewStore(data).subscribe((res) => {
        console.log(res);
      })
    }
  }
  editStore() {
    if (this.newStore.valid) {
      const data = this.manipulateDataBeforeSending(JSON.parse(JSON.stringify(this.newStore.value)))

      this.myStoresService.editStore(this.storeId,data).subscribe((res) => {
        console.log(res);
      })
    }
  }
}

