import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../order-register/confirm-dialog.component';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  id: any;
  userForm!: FormGroup;
  items: any = [];
  selectedImage: any;

  constructor(
    private fb: FormBuilder,
    private dashboardService: DashboardService,
    private router: Router,
    private activated: ActivatedRoute,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.userForm = this.fb.group({
      name: [''],
      email: [''],
      phone: [''],
      location: [''],
      image: [''],
    });
  }

  ngOnInit(): void {
    this.id = this.activated.snapshot.paramMap.get('id');
    this.dashboardService.profile(this.id).subscribe((response) => {
      this.userForm.patchValue(response);
      this.items = response;
    });
  }

  onUpdate() {
    const formData = new FormData();
    formData.append('name', this.userForm.get('name')?.value);
    formData.append('email', this.userForm.get('email')?.value);
    formData.append('password', this.userForm.get('password')?.value);
    formData.append(
      'confirmPassword',
      this.userForm.get('confirmPassword')?.value
    );
    formData.append('phone', this.userForm.get('phone')?.value);
    formData.append('location', this.userForm.get('location')?.value);

    if (!this.selectedImage) {
      formData.append('image', this.userForm.get('image')?.value);
    } else {
      formData.append('image', this.selectedImage);
    }

    this.dashboardService.updateUser(this.id, formData).subscribe(
      (response: any) => {
        this.dashboardService.userData.next(response);
        this.snackBar.open('Profile updated successfully', 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });
        this.router.navigate(['/profile']);
      },
      (error) => {
        throw error;
      }
    );
  }

  onImageSelected(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.selectedImage = file;
    }
  }

  reset() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: 'Do You Want to Discard!' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.userForm.reset();
        this.snackBar.open('Profile has been discarded', 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
        });
        this.router.navigate(['/profile']);
      }
    });
  }

  getImageUrl(imagePath: any): string {
    if (!imagePath || typeof imagePath !== 'string') return 'assets/profile.jpg';
    const backendUrl = this.dashboardService.getBackendUrl();
    return `${backendUrl}/${imagePath}`;
  }
}
