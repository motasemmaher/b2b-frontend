import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateCategoryComponent implements OnInit {
  image;

  constructor(private camera: Camera) {

  }

  takePhoto() {
    console.log("err")
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      const base64Image = 'data:image/jpeg;base64,' + imageData;
      this.image = base64Image;
    }, (err) => {
      console.log(err)
      // Handle error
    });
  }
  ngOnInit(): void {
  }


}
