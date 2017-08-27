import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { OrderModule } from 'ngx-order-pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ManagerComponent } from './manager/manager.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';

import { AuthService } from './services/auth.service';
import { TasksService } from './services/tasks.service';
import { DateService } from './services/date.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ManagerComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    MdInputModule,
    MdButtonModule,
    BrowserAnimationsModule,
    OrderModule,
    HttpModule,
    FormsModule,
    BrowserModule
  ],
  providers: [
    AuthService, 
    TasksService, 
    DateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
