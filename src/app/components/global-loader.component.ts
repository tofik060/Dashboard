import { Component } from '@angular/core';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-global-loader',
  template: `
    <div *ngIf="loadingService.loading$ | async" class="global-loader-overlay">
      <div class="global-loader-container">
        <mat-spinner diameter="50"></mat-spinner>
        <p>Loading...</p>
      </div>
    </div>
  `,
  styles: [`
    .global-loader-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      backdrop-filter: blur(2px);
    }

    .global-loader-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: white;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .global-loader-container p {
      margin-top: 16px;
      font-size: 16px;
      color: #666;
      font-weight: 500;
    }
  `]
})
export class GlobalLoaderComponent {
  constructor(public loadingService: LoadingService) {}
}

