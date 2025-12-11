import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ){
    this.userForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      newPassword:['',[Validators.required]]
    })
  }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.token = this.activatedRoute.snapshot.paramMap.get('token');
  }
  onSubmit(){
   if(this.userForm.valid){
    this.dashboardService.resetPassword(this.id,this.token,this.userForm.value).subscribe(
      (response) => {
        this.success = true;
        this.snackBar.open('Password reset submitted successfully', 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });
        this.router.navigate(['/'])
      },
      (error) =>{
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
