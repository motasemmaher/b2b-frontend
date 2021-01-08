import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MyStoresService } from '../../services/my-stores.service';

@Component({
  selector: 'app-create-offers',
  templateUrl: './create-offers.component.html',
  styleUrls: ['./create-offers.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateOffersComponent implements OnInit {

  disableButtonSave = true;
  offersFromGroup: FormGroup;
  products: any[];
  storeId: any;
  customPopoverOptions: any = {
    header: 'Select Product',
  };
  constructor(
    private myStoresService: MyStoresService,
    private activatedRoute: ActivatedRoute
  ) {
    this.offersFromGroup = new FormGroup({
      offers: new FormArray([])
    });
    this.addOffer();
    this.initFields();
    this.listenOnCreateButton();
  }

  ngOnInit(): void {
  }

  addOffer() {
    (this.offersFromGroup.get('offers') as FormArray).push(new FormGroup({
      productId: new FormControl('', [Validators.required]),
      price: new FormControl(0, [Validators.required, Validators.pattern(/(^[\d\.]+$)/)]),
      discountRate: new FormControl(0, [Validators.required, Validators.pattern(/(^[\d]{1,3}$)/)]),
      duration: new FormControl(0, [Validators.required, Validators.pattern(/(^[\d]{1,3}$)/)])
    }));
  }

  deleteOffer(index) {
    (this.offersFromGroup.get('offers') as FormArray).removeAt(index);
  }
  initFields() {
    this.activatedRoute.params.subscribe(params => {
      this.storeId = params.id;
      this.myStoresService.getProducts(this.storeId, null, 'nameSort=1').subscribe((res) => {
        this.products = res.products.map((product) => ({ name: product.name, value: product._id }));
      });
    });
  }

  listenOnCreateButton() {
    this.offersFromGroup.valueChanges.subscribe(() => {
      if (this.offersFromGroup.valid) {
        this.disableButtonSave = false;
      } else {
        this.disableButtonSave = true;
      }
    });
  }

  createOffer() {
    const data = this.offersFromGroup.value;
    this.myStoresService.createOffers(this.storeId, { productOffers: data.offers }).subscribe(res => {
      console.log(res);
    });
  }


}
