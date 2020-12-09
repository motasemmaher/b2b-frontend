import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input() data: any;
  @Input() type?: string;
  constructor() { }

  ngOnInit(): void {
  }

  isStore(): string {
    return this.type && this.type === 'stores' ? 'storeOpenClose' : 'productInOutStock';
  }
}
