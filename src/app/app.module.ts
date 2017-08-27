import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ManagerComponent } from './manager/manager.component';

import { AuthService } from './services/auth.service';
import { TasksService } from './services/tasks.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ManagerComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule
  ],
  providers: [AuthService, TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
