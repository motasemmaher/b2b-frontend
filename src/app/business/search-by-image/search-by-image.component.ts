import { Component, OnInit } from '@angular/core';
import { SearchByImageService } from './service/search-by-image.service';
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'search-by-image',
  templateUrl: './search-by-image.component.html',
  styleUrls: ['./search-by-image.component.css']
})
export class SearchByImageComponent implements OnInit {
  image = 'assets/defaultImage.png';
  disableSaerch = true;
  isLoading = false;
  isShowResult = false;
  imageNameResult: string;
  constructor(
    private searchByImageService: SearchByImageService
  ) {

  }

  ngOnInit(): void {
  }
  getImageAsBase64(value) {
    this.disableSaerch = false;
    this.image = value;
  }
  search() {
    this.disableSaerch = true;
    this.isLoading = true;
    this.searchByImageService.searchByImage(this.image).subscribe(res => {
      this.isLoading = false;
      this.isShowResult = true;
      this.imageNameResult = res.name;
    });
  }
}
