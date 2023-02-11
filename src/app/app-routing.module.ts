import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component'
import { StudentChatComponent } from './student-chat/student-chat.component';
import { ManageUsersComponent } from './manage-users/manage-users.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'chat', component: StudentChatComponent },
  { path: 'manage', component: ManageUsersComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
