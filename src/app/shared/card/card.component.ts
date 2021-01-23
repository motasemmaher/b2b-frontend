import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewProductComponent } from '@app/shared/view-product/view-product.component';
import { BusinessService } from '@app/business/services/business.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input() data: any;
  @Input() type?: string;
  @Input() isOwne?: boolean;
  @Output('delete') delete: EventEmitter<any> = new EventEmitter();


  constructor(public modalController: ModalController, private businessService: BusinessService) { }

  ngOnInit(): void {
  }

  isStore(): string {
    return this.type && this.type === 'stores' ? 'storeOpenClose' : 'productInOutStock';
  }

  async presentModal(id) {
    const modal = await this.modalController.create({
      component: ViewProductComponent,
      componentProps: {
        id
      },
      showBackdrop: true,
      swipeToClose: true,
    });
    return await modal.present();
  }

  deleteCard() {
    this.delete.emit();
  }

  editCard() {

  }


}
