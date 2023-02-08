import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootComponent } from './boot/boot.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
// import { EmployeeServiceService } from './employee-service.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    BootComponent,
    LoginComponent,
    DashboardComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  // providers: [EmployeeServiceService]
})
export class CoreModule { }
