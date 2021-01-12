import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  users: any [] = [];

  constructor(
    private adminService: AdminService
  ) { 
    this.getUsers();
  }

  ngOnInit(): void {
  }

  addToUsersList(user: any) {
    this.users.push({
      id: user._id,
      username: user.username,
      email: user.email,
      phoneNumber: user.phoneNumber,
      fullName: user.fullName
    });
  }
  getUsers() {
    this.adminService.getWaitingUsers().subscribe((res) => {
      res.waitingUsers.forEach((user) => {
        this.addToUsersList(user.user);
      });
    });
  }

  acceptUser(index: number) {
    const userId = this.users[index].id;
    this.adminService.acceptUser(userId).subscribe((res) => {
      console.log(res)
    })
  }
  rejectUser(index: number) {
    const userId = this.users[index].id;
    this.adminService.rejectUser(userId).subscribe((res) => {
      console.log(res)
    })
  }
}
