import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { EmployeeServiceService } from '../employee-service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  employeeform!: FormGroup;
  isEdit: Boolean = false;
  msg: String = '';
  constructor(
    private employeeService: EmployeeServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.employeeform = new FormGroup({

      id: new FormControl(''),
      username: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      basicSalary: new FormControl(''),
      birthDate: new FormControl(''),
      status: new FormControl(''),
      group: new FormControl(''),
      description: new FormControl(''),

      
    });

    this.route.params.subscribe((param: any) => {
      // console.log(param);
      if (param && param.id) {
        let employee = this.employeeService.getUserById(param.id);
        console.log(employee)
        if (employee) {
          this.employeeform.setValue(employee);
          this.isEdit = true;
        } else this.router.navigate(['/dashboard']);
      }
    });
  }

  
  resetForm(){
    console.log('reset',this.employeeform)
    this.employeeform.reset();
  }

  add(){
    console.log(this.employeeform.valid)
    console.log(this.employeeform)
    if(this.employeeform.valid){
      this.employeeService.users.push(this.employeeform.value);
      this.resetForm();
      this.router.navigate(['/dashboard']);
      console.log('this.studentService.studelost',this.employeeService.getUser())}
      
      else {
        console.log('error')
      this.msg = 'Please complete form'
    }
  }

  edit(){
    this.msg = '';
    if(this.employeeform.valid){
      if(this.employeeService.userEdit(this.employeeform.value)){
        this.router.navigate(['/dashboards'])
      }else {
        console.log('salah 1')
        this.msg = 'Something went wrong'
        this.router.navigate(['/dashboards'])
      }
    }else {
      console.log('salah 2')
      this.msg = 'Please complete form'
      this.router.navigate(['/dashboards'])
    }
  }




}
