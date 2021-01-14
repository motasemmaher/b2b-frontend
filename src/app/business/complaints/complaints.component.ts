import { Component, OnInit } from '@angular/core';
import { ComplaintsService } from './service/complaints.service';
@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {
  complaints: any [];

  constructor(
    private complaintsService: ComplaintsService,
  ) {
    this.complaints = [];
    setTimeout(() => {
      this.complaintsService.getComplaints().subscribe(res => {
        res.complaints.forEach(complaint => {
          this.complaints.push({
            garageOwnerName: complaint.garageOwnerId.fullName,
            storeName: complaint.garageId.name,
            message: complaint.message.data,
          });
        });
      });
    }, 2000)
   }

  ngOnInit(): void {
  }

}
