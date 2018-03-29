import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSerializer } from '@angular/router';
import { AuthListComponent } from './auth-list/auth-list.component';
import { AuthDetailsComponent } from './auth-details/auth-details.component';
import { TitleCaseUrlSerializer } from '../TitleCaseUrlSerializer';

const routes: Routes = [
  { path:"authorization", component: AuthListComponent},
  { path:"authorization/:id", component: AuthDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule], 
  providers: [ 
    {
      provide: UrlSerializer,
      useClass: TitleCaseUrlSerializer
  }
  
]
})
export class AuthRoutingModule { }
