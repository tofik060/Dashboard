import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../order-register/confirm-dialog.component';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  id:any;
  userForm!: FormGroup
  constructor(
    private dashboardService: DashboardService,
    private router: Router,
    private fb : FormBuilder,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ){
    this.userForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
      newPassword:['',[Validators.required]]
    })
  }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }
  onSubmit(){
   if(this.userForm.valid){
    this.dashboardService.changePassword(this.id,this.userForm.value).subscribe(
      (response) => {
        this.snackBar.open('Password change submitted successfully', 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });
        this.router.navigate(['/profile'])
      }
    )
   }
  }
  onDelete(){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: 'Do you want to discard!' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.userForm.reset();
        this.snackBar.open('Password has been discarded', 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });
        this.router.navigate(['/profile']);
      }
    });
  }
}
