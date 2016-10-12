import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app.router';
import { UserCardComponent } from './user-card/user-card.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { SecondChildService } from './second-child/second-child.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    UserCardComponent,
    SecondChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [SecondChildService],
  bootstrap: [AppComponent]
})
export class AppModule { }
