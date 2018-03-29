import { Component, OnInit } from '@angular/core';
import Authorization from '../model/authorization';
import { AuthService } from '../services/auth.service';
import { RouterState, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth-details',
  templateUrl: './auth-details.component.html',
  styleUrls: ['./auth-details.component.scss']
})
export class AuthDetailsComponent implements OnInit {

  authorization: Authorization;

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute) {

   }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(x=> {
    this.authorization = this.authService.GetAuthorization( +x.get('id'));
    });
  }

}
