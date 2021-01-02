import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { MyStoresService } from '@app/business/all-my-stores/services/my-stores.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastService } from '@app/shared/toaster/toast.service';
@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InsertProductComponent implements OnInit {
  images = [];
  isLoading = false;
  loadType = '';
  categories: any[];
  productFromGroup: FormGroup;
  disableButtonSave = true;
  storeId: string;
  selectedCategoryId: string;

  constructor(
    private camera: Camera,
    private myStoresService: MyStoresService,
    private activatedRoute: ActivatedRoute,
    private toastService: ToastService
  ) {
    this.productFromGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern(/(^[A-Z a-z \s\d-']{4,64}$)/)]),
      description: new FormControl('', [Validators.required, Validators.pattern(/(^[A-Z a-z \s\d-'\.]{8,254}$)/)]),
      price: new FormControl(0, [Validators.required, Validators.pattern(/(^[\d\.]+$)/)]),
      amount: new FormControl(0, [Validators.required, Validators.pattern(/(^[\d\.]+$)/)]),
      tags: new FormControl('', [Validators.required, Validators.pattern(/(^[A-Z a-z\s\d-,']{2,256}$)/)]),
      productType: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      categoryId: new FormControl('', [Validators.required])
    });

    this.listenOnValidateButtonSave();
    this.getStoreIdAndCategories();
  }



  getStoreIdAndCategories() {
    this.activatedRoute.params.subscribe(params => {
      this.storeId = params.id;
      this.myStoresService.getCategories(this.storeId).subscribe(res => {
        this.categories = res.categories;
      });
    });
  }

  listenOnValidateButtonSave() {
    this.productFromGroup.valueChanges.subscribe(() => {
      if (this.productFromGroup.valid) {
        this.disableButtonSave = false;
      } else {
        this.disableButtonSave = true;
      }
    });
  }
  takePhoto() {
    this.isLoading = true;
    this.loadType = 'takePhoto';
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.images.push('data:image/jpeg;base64,' + imageData);
      this.isLoading = false;
      this.loadType = '';
    }, (err) => {
      // Handle error
      this.isLoading = false;
      this.loadType = '';
    });
  }
  ngOnInit(): void {
  }
  uploadImage(event) {
    this.isLoading = true;
    this.loadType = 'uploadImage';
    const reader = new FileReader();
    const i = this;
    const file = event.target.files[0];
    console.log(file);
    reader.readAsDataURL(file);
    reader.onload =  () => {
      const image = new Image();
      image.src = reader.result.toString();
      image.onload = () => {
        if (image.width < 400 && image.width > 350 && image.height < 350 && image.height > 300) {
          this.productFromGroup.patchValue({ image: reader.result });
        } else {
          // console.log('size error');
          this.toastService.presentToastWithOptions('error', 'size error', 'danger');
        }
        this.isLoading = false;
        this.loadType = '';
      };
    };
    reader.onerror = (error) =>  {
      console.log('Error: ', error);
      this.isLoading = false;
      this.loadType = '';
    };
  }

  insertProduct() {
    const data = this.manipulateDataBeforeSending();
    this.myStoresService.insertProduct(this.storeId, this.selectedCategoryId, data).subscribe((res) => {
      console.log(res);
    });
  }

  manipulateDataBeforeSending(): any {
    const data = JSON.parse(JSON.stringify(this.productFromGroup.value));
    this.selectedCategoryId = data.categoryId;
    delete data.categoryId;
    return data;
  }
}
