import { Component, OnInit } from '@angular/core';
import { User } from '../../entities/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'gl-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) {
    this.userService.getUser().subscribe(data => this.user = data);
  }

  ngOnInit() {
  }

}
