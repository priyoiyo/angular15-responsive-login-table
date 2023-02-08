import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootComponent } from './core/boot/boot.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { LoginComponent } from './core/login/login.component';
import {  FormComponent } from "./core/form/form.component";

const routes: Routes = [
  {
    path: 'boot', component: BootComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'add', component: FormComponent
  },
  {
    path: 'edit/:id', component: FormComponent
  },
  {
    path: '', redirectTo: '/boot', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/boot'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
