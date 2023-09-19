import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DashboardService } from '../services/dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private activated : ActivatedRoute
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
      console.error('Failed to Fetch Remove Account');
      this.router.navigate(['/'])
    }
    if(token){
      if(window.confirm('Are You Sure!, You Want To Delete Your Account')){
        this.dashboardService.removeAccount(this.id,this.email,this.password,this.removeForm.value).subscribe((res) => {
          console.log("Remove Account :", res)
          this.router.navigate(['/']);
        },
        (error) =>{
          console.error(error)
        } )
      }
    }

  }

  deleteAccount(){
    if(window.confirm('Do You Want To Cancel')){
      this.removeForm.reset();
      this.router.navigate(['/profile'])
    }
  }
}
