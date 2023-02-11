import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialExampleModule } from './material.module';

import { LoginComponent } from './login/login.component'
import { ManageUsersComponent } from './manage-users/manage-users.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

import { StudentChatComponent } from './student-chat/student-chat.component';
import { AdminToolbarComponent } from './admin-toolbar/admin-toolbar.component';
import { StudentToolbarComponent } from './student-toolbar/student-toolbar.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    ManageUsersComponent,
    StudentChatComponent,
    AdminToolbarComponent,
    StudentToolbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
