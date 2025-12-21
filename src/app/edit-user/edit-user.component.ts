import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../order-register/confirm-dialog.component';
import { environment } from '../../environments/environment';

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
  isLoading: boolean = true;

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
    this.isLoading = true;
    
    this.dashboardService.profile(this.id).subscribe({
      next: (response) => {
        this.userForm.patchValue(response);
        this.items = response;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading user data:', error);
        this.isLoading = false;
        this.snackBar.open('Error loading profile data', 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });
      }
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

  getUserInitials(): string {
    if (!this.items || !this.items.name) return 'U';
    const nameParts = this.items.name.trim().split(' ');
    if (nameParts.length >= 2) {
      // Get first letter of first word and first letter of last word
      return (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase();
    } else if (nameParts.length === 1) {
      // Single word name - take first two letters
      return nameParts[0].substring(0, 2).toUpperCase();
    }
    return 'U';
  }

  hasUserImage(): boolean {
    const imageValue = this.items && this.items.image ? this.items.image : null;
    return !!(imageValue && typeof imageValue === 'string' && imageValue.trim() !== '' && environment.production === false);
  }
}
