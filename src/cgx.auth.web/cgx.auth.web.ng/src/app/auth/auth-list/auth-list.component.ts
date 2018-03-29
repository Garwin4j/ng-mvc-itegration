import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import Authorization from '../model/authorization';

@Component({
  selector: 'app-auth-list',
  templateUrl: './auth-list.component.html',
  styleUrls: ['./auth-list.component.scss']
})
export class AuthListComponent implements OnInit {

  authList: Authorization[];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authList = this.authService.GetAuthorizations();
  }

}
