import { TranslateService } from '@ngx-translate/core';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Input()isHeader: boolean;
  @Output('searchTerm')term: EventEmitter<any> = new EventEmitter();
  @Output('isSearchOpen')isSearchOpen?: EventEmitter<any> = new EventEmitter();

  searchTerm: string;
  allItemList: any[];
  filteredItemlist: any[];
  toggled: boolean = false;

  constructor(private translate: TranslateService) {
    this.allItemList = [
      { name: "Hyundai Sonata Mirror - Left - Driver Side", type: "Mirror"},
      { name: "Toyota Pickup Headlight Set", type: "Headlight"},
      { name: "Parking Brake Shoe - Rear - Wagner Brake", type: "Brake"},
      { name: "Jeep Gladiator - Front - Body Armor", type: "Bumper"},
      { name: "Toyota Tacoma Door Handle - Front Left - Driver Side", type: "Door handle"},
      { name: "Toyota 4Runner Wiper Blade - Rear", type: "Windshield wiper"},
      { name: "Volkswagen Beetle Window Regulator Kit - Rear Left", type: "Window"},
      { name: "Land Rover Range Rover Sport Spare Tire Hoist", type: "Tire"},
    ];

    this.filteredItemlist = this.allItemList;

    this.toggled = false;
  }

  ngOnInit() {
  }

  toggle() {
    this.toggled = !this.toggled;
    this.isSearchOpen.emit(this.toggled);
  }

  filterList(value) {
    this.searchTerm = value.srcElement.value;

    if(!this.searchTerm){
      this.filteredItemlist = this.allItemList;
      return;
    }

    this.filteredItemlist = this.allItemList.filter(currentItem => {
      if(currentItem && this.searchTerm) {
        return (currentItem.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 || currentItem.type.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1);
      }
    });

    this.term.emit(this.searchTerm);

  }

}
