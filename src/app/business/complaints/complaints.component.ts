import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComplaintsService } from './service/complaints.service';
@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit, OnDestroy {
  complaints: any[];
  isLoading: boolean = false;
  constructor(
    private complaintsService: ComplaintsService,
  ) {


  }

  ngOnInit(): void {
    this.complaints = [];
    this.getComplaints();
  }

  getComplaints() {
    this.complaintsService.getComplaints().subscribe(res => {
      this.complaintsService.setSkip(this.complaintsService.skip + 5);
      res.complaints.forEach(complaint => {
        this.complaints.push({
          garageOwnerName: complaint.garageOwnerId.fullName,
          storeName: complaint.garageId?.name || '',
          message: complaint.message.data,
        });
      });
    });
  }
  ngOnDestroy(): void {
    this.complaintsService.resetBothDataSkipAndLimit();
  }

}
