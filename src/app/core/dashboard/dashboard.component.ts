import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../employee';
import {first } from 'rxjs/operators'
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { PrimeNGConfig, FilterService } from 'primeng/api';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  employees: Employee[] = [];
  
  cols: any[] = [];

  selectedEmployees: Employee[] =[];





  loading: boolean = true;

  @ViewChild('dt') table!: Table ;
  constructor(private employeeService: EmployeeServiceService,  private primengConfig: PrimeNGConfig, private filterService: FilterService, private router: Router ) { }

  ngOnInit() {
    this.employees = this.employeeService.getUser()
    // console.log(this.employees)
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'username', header: 'Username' },
      { field: 'firstName', header: 'First Name' },
      { field: 'lastName', header: 'Last Name' },
      { field: 'birthDate', header: 'Birth Date' },
      { field: 'email', header: 'Email' },
      { field: 'basicSalary', header: 'Basoc Salary' },
      { field: 'status', header: 'Status' },
      { field: 'group', header: 'Group' },
      { field: 'description', header: 'Description' }
  ];

  }
  

onEditClick (value:any){
  this.router.navigate([`edit${value}`])
}
onDeleteClick (value:any){
  console.log(value)
}
onDateSelect(value :any) {
    this.table.filter(this.formatDate(value), 'date', 'equals')
}

formatDate(date :any) {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
        month = '0' + month;
    }

    if (day < 10) {
        day = '0' + day;
    }

    return date.getFullYear() + '-' + month + '-' + day;
}


}
