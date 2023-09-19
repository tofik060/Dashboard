import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';

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
    private dashboardService: DashboardService
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
      console.log('File Image ', file);
      this.selectedImage = file;
      console.log('Image ', this.selectedImage);
    }
    // this.selectedImage = event.target.files[0]
    // console.log("File Image ",this.selectedImage)
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

       // console.log(this.registration.value);

        this.dashboardService.register(formData).subscribe(
          (response) => {
            console.log("Register",response);
            this.router.navigate(['/']);
          },
          (error) => {
            console.error(error);
          }
        );
      
    }
    // this.router.navigate(['/registration']);
  }
  reset() {
    if (window.confirm('Do You Want to Exit')) {
      this.registration.reset();
      this.router.navigate(['/registration']);
    }
  }
  // private createFormData(): FormData {
  //   const formData = new FormData();
  //   formData.append('name', this.registration.get('name')?.value);
  //   formData.append('email', this.registration.get('email')?.value);
  //   formData.append('password', this.registration.get('password')?.value);
  //   formData.append('confirmPassword', this.registration.get('confirmPassword')?.value);
  //   formData.append('phone', this.registration.get('phone')?.value);
  //   formData.append('location', this.registration.get('location')?.value);
  //   formData.append('image', this.selectedImage);

  //   return formData;
  // }
}
