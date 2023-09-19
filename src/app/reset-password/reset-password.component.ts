import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  id:any;
  token:any;
  error:any = null;
  success: boolean = false;
  userForm!: FormGroup
  constructor(
    private dashboardService: DashboardService,
    private router: Router,
    private fb : FormBuilder,
    private activatedRoute: ActivatedRoute
  ){
    this.userForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      //password:['',[Validators.required]],
      newPassword:['',[Validators.required]]
    })
  }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.token = this.activatedRoute.snapshot.paramMap.get('token');
  }
  onSubmit(){
   // console.log("Password",this.userForm.value)
   if(this.userForm.valid){
    this.dashboardService.resetPassword(this.id,this.token,this.userForm.value).subscribe(
      (response) => {
        console.log("Password Change",response)
        this.success = true;
        this.router.navigate(['/'])
      },
      (error) =>{
        console.log("You lost your authentication")
        this.error = "You lost your authentication";
      }
    )
   }
  }
  onDelete(){
    if(window.confirm('Do you want to discard !')){
      this.userForm.reset();
      this.router.navigate(['/'])
    }
  }
}
