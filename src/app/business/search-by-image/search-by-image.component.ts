import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { SearchByImageService } from './service/search-by-image.service';
import { SearchService } from '@app/shared/search/search.service';
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
  resultOfSearch: any [];
  constructor(
    private searchByImageService: SearchByImageService,
    private translate: TranslateService,
    private searchService: SearchService
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
      this.searchService.search(this.imageNameResult).subscribe(res => {
        this.resultOfSearch = res.productsSearchResult;
      })
    });
  }
}
