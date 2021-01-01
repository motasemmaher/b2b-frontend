import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { StoresService } from '../../../service/stores.service';
import { ActivatedRoute } from '@angular/router';
// import { Category } from '../../../model/category';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class OffersComponent implements OnInit {

  offers: any[];
  isFetching: boolean = false;
  constructor(
    private storesService: StoresService,
    private activatedRoute: ActivatedRoute,
  ) {

    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      this.isFetching = true;
      this.storesService.getOffersByStoreId('storeS', id).subscribe(res => {
        this.isFetching = false;
        this.offers = res.offers;
      });
    });
  }

  ngOnInit(): void {
  }

}
