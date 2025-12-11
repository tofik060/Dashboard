import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent  implements OnInit {

  userForm! : FormGroup;
  EditMode : boolean = true

  constructor(
    private fb : FormBuilder,
    private router : Router,
    private activatedRoute : ActivatedRoute,
    private dashboardService : DashboardService,
    private snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      confirmPassword: [''],
      phone: [''],
    })

    this.activatedRoute.queryParamMap.subscribe(
      (res) => {
        let qParam = res.get('EditMode');
        if(qParam !== null){
          this.EditMode = true;
        }else{
          this.EditMode = false
        }
      }
    )
  }

  onSubmit(){
    if (this.userForm.valid) {
      this.snackBar.open('Settings submitted successfully', 'Close', {
        duration: 3000,
        horizontalPosition: 'end',
        verticalPosition: 'top'
      });
    }
  }
}
