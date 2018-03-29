import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthListComponent } from './auth-list/auth-list.component';
import { AuthDetailsComponent } from './auth-details/auth-details.component';
import { AuthService } from './services/auth.service';
import { UrlSerializer } from '@angular/router';
import { TitleCaseUrlSerializer } from '../TitleCaseUrlSerializer';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [AuthListComponent, AuthDetailsComponent],
  providers: [AuthService, 
      {
        provide: UrlSerializer,
        useClass: TitleCaseUrlSerializer
    }
    
  ]
})
export class AuthModule { }
