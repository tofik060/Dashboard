import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-cancellation',
  templateUrl: './cancellation.component.html',
  styleUrls: ['./cancellation.component.css']
})
export class CancellationComponent implements OnInit {

  cancellationForm! : FormGroup;
//orderListForm! : FormGroup;
  id:any

  constructor(
    private fb : FormBuilder, 
    private router: Router,
    private dashboardService : DashboardService,
    private activated: ActivatedRoute) {}
 

  ngOnInit(): void {   
    
    //const cancellationForm: FormGroup = new FormGroup({
    // 
    //});
    //console.log(cancellationForm)

    this.cancellationForm = this.fb.group({
      name: new FormControl('',[Validators.required,Validators.minLength(10)]),
      itemName: ['',[Validators.required]],
      productCode: ['',[Validators.required]],
      orderDate: ['',[Validators.required]],
      cancelDate: ['',[Validators.required]],
      quantity: ['',[Validators.required]],
      price: ['',[Validators.required]],
      description: ['',[Validators.required]],
    });

    this.id = this.activated.snapshot.paramMap.get('id');
    this.dashboardService.productId(this.id).subscribe(
      ( response ) => {
        this.cancellationForm.patchValue(response)
      }
    )
   
  }

  onSubmit() {
    this.dashboardService.productUpdateId(this.id,this.cancellationForm.value).subscribe(
      (response) => {
        console.log("Order Update Successfully!",response);
        this.router.navigate(['/order'])
      },
      (error) => {
        console.error(error) 
      }
    )

    if (this.cancellationForm.valid) {
      this.dashboardService.cancelUser(this.cancellationForm.value).subscribe(
        (res) => {
          console.log(res);
          //this.cancellationForm.reset();
          this.router.navigate(['/order'])
        },
        (error) => {
          console.error(error)
        }
      )
    }
  }

  reset(){
    if(window.confirm("Do you want to Cancle Your Order")){
      this.cancellationForm.reset();
      this.router.navigate(['/order'])
    }
  }
  
}
