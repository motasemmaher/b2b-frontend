import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { MyStoresService } from '@app/business/all-my-stores/services/my-stores.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})

export class CreateCategoryComponent implements OnInit {
  categoryFromGroup: FormGroup;
  disableButtonSave = true;
  storeId: string;
  constructor(
    private myStoresService: MyStoresService,
    private activatedRoute: ActivatedRoute
  ) {
    this.categoryFromGroup = new FormGroup({
      name: new FormControl('', 
        Validators.compose([
          Validators.required,
          this.customPatternValid({ pattern: /(^[\p{L}\s\d'_-]{2,64}$)/ugi , msg: 'invalid name'})
        ])
      )
    });

    this.listenOnValidateButtonSave();
    this.getStoreId();
  }

  ngOnInit(): void {
  }
  getStoreId() {
    this.activatedRoute.params.subscribe(params => {
      this.storeId = params.id;
    });
  }

  listenOnValidateButtonSave() {
    this.categoryFromGroup.valueChanges.subscribe(() => {
      if (this.categoryFromGroup.valid) {
        this.disableButtonSave = false;
      } else {
        this.disableButtonSave = true;
      }
    });
  }

  createCategory() {
    this.myStoresService.createCategory(this.storeId, this.categoryFromGroup.value).subscribe((res) => {
      console.log(res);
    });
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
