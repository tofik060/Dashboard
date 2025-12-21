import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DashboardService } from '../services/dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../order-register/confirm-dialog.component';

@Component({
  selector: 'app-remove-account',
  templateUrl: './remove-account.component.html',
  styleUrls: ['./remove-account.component.css']
})
export class RemoveAccountComponent implements OnInit {

  id: any;
  removeForm!: FormGroup;
  email: string = '';
  password: string = '';
  removeUser: any =[];

  constructor(
    private fb : FormBuilder,
    private dashboardService: DashboardService,
    private router: Router,
    private activated : ActivatedRoute,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ){
    this.removeForm = this.fb.group({
      email:['']
    })
  }

  ngOnInit(): void {
    this.id = this.activated.snapshot.paramMap.get('id');
    this.dashboardService.profile(this.id).subscribe((response) => {
      this.removeForm.patchValue(response)
      this.removeUser = response
    })
  }

  onRemoveAccount(){
    const token = localStorage.getItem('token')
    if(!token){
      this.router.navigate(['/'])
    }
    if(token){
      if(window.confirm('Are You Sure!, You Want To Delete Your Account')){
        this.dashboardService.removeAccount(this.id,this.email,this.password,this.removeForm.value).subscribe((res) => {
          this.router.navigate(['/']);
        },
        (error) =>{
          throw error;
        } )
      }
    }

  }

  deleteAccount(){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: 'Do you want to discard your account?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.removeForm.reset();
        this.snackBar.open('Account has been discarded', 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });
        this.router.navigate(['/profile']);
      }
    });
  }

  getImageUrl(imagePath: string): string {
    if (!imagePath) return '../../assets/profile.jpg';
    const backendUrl = this.dashboardService.getBackendUrl();
    return `${backendUrl}/${imagePath}`;
  }
}
