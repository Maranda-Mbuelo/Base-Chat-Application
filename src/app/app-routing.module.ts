import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { SignupFormComponent } from './auth/signup-form/signup-form.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'signup', component:SignupFormComponent },
  { path: 'login', component:LoginComponent },
  { path: 'chat', component:ChatFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
