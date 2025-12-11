import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-details-dialog',
  template: `
    <h2 mat-dialog-title>Customer Details</h2>
    <mat-dialog-content>
      <mat-card>
        <mat-card-content>
          <div class="customer-detail-item">
            <mat-icon class="detail-icon">person</mat-icon>
            <div class="detail-content">
              <strong>Name:</strong>
              <span>{{ data.customerName || 'N/A' }}</span>
            </div>
          </div>
          <div class="customer-detail-item">
            <mat-icon class="detail-icon">email</mat-icon>
            <div class="detail-content">
              <strong>Email:</strong>
              <span>{{ data.customerEmail || 'N/A' }}</span>
            </div>
          </div>
          <div class="customer-detail-item">
            <mat-icon class="detail-icon">phone</mat-icon>
            <div class="detail-content">
              <strong>Phone:</strong>
              <span>{{ data.customerPhone || 'N/A' }}</span>
            </div>
          </div>
          <div class="customer-detail-item">
            <mat-icon class="detail-icon">location_on</mat-icon>
            <div class="detail-content">
              <strong>Address:</strong>
              <span>{{ data.customerAddress || 'N/A' }}</span>
            </div>
          </div>
        </mat-card-content>
      </mat-card>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button [mat-dialog-close]="true" color="primary">Close</button>
    </mat-dialog-actions>
  `,
  styles: [`
    mat-dialog-content {
      min-width: 400px;
      max-width: 500px;
    }
    .customer-detail-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 20px;
      padding: 10px;
      border-bottom: 1px solid #e0e0e0;
    }
    .customer-detail-item:last-child {
      border-bottom: none;
    }
    .detail-icon {
      margin-right: 15px;
      margin-top: 5px;
      color: #1976d2;
    }
    .detail-content {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .detail-content strong {
      margin-bottom: 5px;
      color: #666;
      font-size: 12px;
      text-transform: uppercase;
    }
    .detail-content span {
      color: #333;
      font-size: 16px;
      word-wrap: break-word;
    }
    mat-card {
      box-shadow: none;
    }
    mat-card-content {
      padding: 10px 0;
    }
  `]
})
export class CustomerDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CustomerDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      customerName?: string;
      customerEmail?: string;
      customerPhone?: number | string;
      customerAddress?: string;
    }
  ) {}
}

