import { Component, OnInit } from '@angular/core';
import { AdminService } from '@app/business/admin/service/admin.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  users: any[] = [];

  constructor(
    private adminService: AdminService
  ) {
    this.getUsers();
  }

  ngOnInit(): void {
  }

  addToUsersList(user: any) {
    let role = user.role.split('O').join(' O');
    role = role.replace(role[0], role[0].toLocaleUpperCase());
    this.users.push({
      username: user.username,
      email: user.email,
      role,
      phoneNumber: user.phoneNumber,
      fullName: user.fullName
    });
  }
  getUsers() {
    this.adminService.getUsers().subscribe((res) => {
      res.carOwners.forEach((user) => {
        this.addToUsersList(user.user);
      });
      res.garageOwners.forEach((user) => {
        this.addToUsersList(user.user);
      });
    });
  }
  deleteUser(index: number) {
    const userId = this.users[index].id;
    this.adminService.deleteUser(userId).subscribe((res) => {
      console.log(res)
    })
  }
}