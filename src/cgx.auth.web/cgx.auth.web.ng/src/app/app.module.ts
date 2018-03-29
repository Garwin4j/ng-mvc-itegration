import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { MainNavComponent } from './layout/main-nav/main-nav.component';
import { environment } from '../environments/environment';
import { CoursesModule } from './courses/courses.module';
import { FooterComponent } from './layout/footer/footer.component';
import { AuthModule } from './auth/auth.module';
import { TitleCaseUrlSerializer } from './TitleCaseUrlSerializer';
import { UrlSerializer } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    AuthModule,
    //ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {
      provide: UrlSerializer,
      useClass: TitleCaseUrlSerializer
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
