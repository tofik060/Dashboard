import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../services/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {

  forgetPasswordForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dashboardService: DashboardService,
    private router: Router
  ){
    this.forgetPasswordForm = this.fb.group({
      email:['',[Validators.required,Validators.email]]
    })
  }

  onSubmit(){
    //console.log("Forget Password",this.forgetPasswordForm.value)
    this.dashboardService.forgetPassword(this.forgetPasswordForm.value).subscribe(
      (response) =>{
        if(window.confirm('password reset link has been send to ur email ')){
          console.log("Forget Password",response)
        }
      },
      (error) =>{
        console.error(error)
      }
    )
  }

  onDelete(){
    if(window.confirm("Do you want to exit this page !")){
      this.forgetPasswordForm.reset();
      this.router.navigate(['/'])  
    }
  }
}
