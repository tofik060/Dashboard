import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  id: any;
  userForm!: FormGroup;
  items: any = [];

  constructor(
    private fb: FormBuilder,
    private dashboardService: DashboardService,
    private router: Router,
    private activated: ActivatedRoute
  ) {
    this.userForm = this.fb.group({
      name: [''],
      email: [''],
      phone: [''],
      location: [''],
      image: ['']
    }); 
  }

  ngOnInit(): void {
    this.id = this.activated.snapshot.paramMap.get('id');
    this.dashboardService.profile(this.id).subscribe((response) => {
      this.userForm.patchValue(response);
      this.items = response
    });
  }

  onUpdate() {
  
      const formData = new FormData();
      formData.append('name', this.userForm.get('name')?.value);
      formData.append('email', this.userForm.get('email')?.value);
      formData.append('password', this.userForm.get('password')?.value);
      formData.append('confirmPassword',this.userForm.get('confirmPassword')?.value);
      formData.append('phone', this.userForm.get('phone')?.value);
      formData.append('location', this.userForm.get('location')?.value);
    
      if(!this.selectedImage){
        formData.append('image', this.userForm.get('image')?.value);
      }else{
        
        formData.append('image', this.selectedImage);
      }
      
      this.dashboardService.updateUser(this.id, formData);
    
  //  this.dashboardService.updateUser(this.id, this.userForm.value);
    // .subscribe(
    //   (res)=>{
    //     console.log(res);
    //     this.router.navigate(['/profile'])
    //   },
    //   (error) => {
    //     console.error(error);
    //   }
    // )
  }

  reset() {
    if (window.confirm('Do You Want to Exit')) {
      this.userForm.reset();
      this.router.navigate(['/profile']);
    }
  }

  selectedImage: any;

onImageSelected(event: any) {
  // const selectedFile = event.target.files[0];
  
  // if (selectedFile) {
  //   // Show image preview
  //   const reader = new FileReader();
  //   reader.onload = (e: any) => {
  //     this.selectedImage = e.target.result;
  //   };
  //   reader.readAsDataURL(selectedFile);
  // }
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    console.log('File Image ', file);
    this.selectedImage = file;
    console.log('Image ', this.selectedImage);
  }
}

}
