import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../order-register/confirm-dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registration!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dashboardService: DashboardService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.registration = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      location: ['', [Validators.required]],
      image: [''],
    });
  }
  selectedImage: any;
  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.selectedImage = file;
    }
  }
  onSubmit() {
    if (this.registration.valid) {
        const formData = new FormData();
        formData.append('name', this.registration.get('name')?.value);
        formData.append('email', this.registration.get('email')?.value);
        formData.append('password', this.registration.get('password')?.value);
        formData.append('confirmPassword',this.registration.get('confirmPassword')?.value);
        formData.append('phone', this.registration.get('phone')?.value);
        formData.append('location', this.registration.get('location')?.value);
        formData.append('image', this.selectedImage);

        this.dashboardService.register(formData).subscribe(
          (response) => {
            this.snackBar.open('Registration submitted successfully', 'Close', {
              duration: 3000,
              horizontalPosition: 'end',
              verticalPosition: 'top'
            });
            this.router.navigate(['/']);
          },
          (error) => {
            throw error;
          }
        );
      
    }
  }
  reset() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: 'Do You Want to Exit?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.registration.reset();
        this.snackBar.open('Registration has been cancelled', 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });
        this.router.navigate(['/']);
      }
    });
  }
}
