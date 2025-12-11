import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../services/dashboard.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../order-register/confirm-dialog.component';

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
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ){
    this.forgetPasswordForm = this.fb.group({
      email:['',[Validators.required,Validators.email]]
    })
  }

  onSubmit(){
    this.dashboardService.forgetPassword(this.forgetPasswordForm.value).subscribe(
      (response) =>{
        this.snackBar.open('Password reset link has been sent to your email', 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });
      },
      (error) =>{
        throw error;
      }
    )
  }

  onDelete(){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: 'Do you want to exit this page!' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.forgetPasswordForm.reset();
        this.snackBar.open('Forget Password has been discarded', 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });
        this.router.navigate(['/']);
      }
    });
  }
}
