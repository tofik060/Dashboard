import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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
      name: ['',Validators.required],
      email: ['',Validators.required],
      password: [''],
      confirmPassword: [''],
      phone: ['',Validators.required],
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
    // this.dashboardService.register(this.userForm.value).subscribe(
    //   (response) =>{console.log("Dashbord Data : ",response)},
    //   (error) =>{console.error(error)},
    // )
  }
} 
 