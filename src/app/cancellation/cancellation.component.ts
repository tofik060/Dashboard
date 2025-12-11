import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DashboardService } from '../services/dashboard.service';
import { ConfirmDialogComponent } from '../order-register/confirm-dialog.component';

@Component({
  selector: 'app-cancellation',
  templateUrl: './cancellation.component.html',
  styleUrls: ['./cancellation.component.css']
})
export class CancellationComponent implements OnInit {

  cancellationForm! : FormGroup;
  id:any

  constructor(
    private fb : FormBuilder, 
    private router: Router,
    private dashboardService : DashboardService,
    private activated: ActivatedRoute,
    private snackBar: MatSnackBar,
    private dialog: MatDialog) {}
 

  ngOnInit(): void {   
    this.cancellationForm = this.fb.group({
      name: new FormControl('',[Validators.required]),
      itemName: ['',[Validators.required]],
      productCode: ['',[Validators.required]],
      orderDate: ['',[Validators.required]],
      cancelDate: ['',[Validators.required]],
      quantity: ['',[Validators.required]],
      price: ['',[Validators.required]],
      description: ['',[Validators.required]],
    });

    this.id = this.activated.snapshot.paramMap.get('id');
    this.dashboardService.orderId(this.id).subscribe(
      ( response ) => {
        this.cancellationForm.patchValue(response)
      }
    )
   
  }

  onSubmit() {
    if (this.cancellationForm.valid) {
      const cancelDate = this.cancellationForm.get('cancelDate')?.value
      this.dashboardService.cancelUser(this.cancellationForm.value).subscribe(
        (res) => {
          this.dashboardService.orderUpdateId(this.id, {cancelDate: cancelDate, orderStatus: 'Cancelled'}).subscribe(
            (response) => {
              this.snackBar.open('Cancellation submitted successfully', 'Close', {
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
              });
              this.router.navigate(['/order'])
            },
            (error) => {
              throw error;
            }
          )
        },
        (error) => {
          throw error;
        }
      )
    }
  }

  reset(){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: 'Do you want to Cancel Your Order?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.cancellationForm.reset();
        this.snackBar.open('Order has been cancelled', 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });
        this.router.navigate(['/order']);
      }
    });
  }
  
}
