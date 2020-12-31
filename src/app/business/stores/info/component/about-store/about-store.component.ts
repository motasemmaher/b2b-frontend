import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "../../../model/store";
import { StoresService } from "../../../service/stores.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-about-store",
  templateUrl: "./about-store.component.html",
  styleUrls: ["./about-store.component.css"],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutStoreComponent implements OnInit {
  store: Store;
  constructor(
    private storesService: StoresService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.id;
      this.storesService.getStoreById("stores", id).subscribe((res) => {
        this.store = res;
      });
    });
  }

  ngOnInit(): void {}
}
