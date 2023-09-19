import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private activatedRoute: ActivatedRoute
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
   // console.log("Password",this.userForm.value)
   if(this.userForm.valid){
    this.dashboardService.changePassword(this.id,this.userForm.value).subscribe(
      (response) => {
        console.log("Password Change",response)
        this.router.navigate(['/profile'])
      }
    )
   }
  }
  onDelete(){
    if(window.confirm('Do you want to discard !')){
      this.userForm.reset();
      this.router.navigate(['/profile'])
    }
  }
}
