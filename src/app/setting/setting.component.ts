import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent  implements OnInit {

  userForm! : FormGroup;
  EditMode : boolean = true

  constructor(
    private fb : FormBuilder,
    private router : Router,
    private activatedRoute : ActivatedRoute,
    private dashboardService : DashboardService
  ){}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      confirmPassword: [''],
      phone: [''],
    })

    this.activatedRoute.queryParamMap.subscribe(
      (res) => {
        let qParam = res.get('EditMode');
        if(qParam !== null){
          this.EditMode = true;
        }else{
          this.EditMode = false
        }
      }
    )
  }

  onSubmit(){
   // this.userForm.value
   // console.log(this.userForm.value)
    // this.dashboardService.register1(this.userForm.value).subscribe(
    //   (response) =>{console.log("Dashbord Data : ",response)},
    //   (error) =>{console.error(error)},
    // )
  }
}
