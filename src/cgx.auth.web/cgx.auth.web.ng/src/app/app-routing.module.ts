import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';

const routes: Routes = [
  { path: '' , component: CoursesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: false  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
