import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DashboardService } from '../services/dashboard.service';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchText: string = '';

  searchFilter = new FormControl('');

  productSearchText: string = '';

  productSearchFilter = new FormControl('');

  orderList: any = [];
  productList: any = [];

  // Chart configuration
  public monthlyChartType: ChartType = 'bar';
  public monthlyChartData: ChartData<'bar'> = {
    labels: [],
    datasets: []
  };
  public monthlyChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  // Weekly chart configuration
  public weeklyChartType: ChartType = 'line';
  public weeklyChartData: ChartData<'line'> = {
    labels: [],
    datasets: []
  };
  public weeklyChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  constructor(
    private dashboardService: DashboardService,
  ){}

    ngOnInit(): void {
     
      this.dashboardService.orderAll()
      .subscribe(
        (res) => {
          this.orderList = res;
          this.updateMonthlyChart();
          this.updateWeeklyChart();
        }
      )

      this.dashboardService.productAll()
      .subscribe(
        (res) => {
          this.productList = res;
          this.updateMonthlyChart();
          this.updateWeeklyChart();
        }
      )
    }

    updateMonthlyChart(): void {
      if ((!this.orderList || this.orderList.length === 0) && (!this.productList || this.productList.length === 0)) {
        return;
      }

      // Get current year and last 12 months
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const currentDate = new Date();
      const monthLabels: string[] = [];
      const orderCounts: number[] = [];
      const productCounts: number[] = [];

      // Initialize arrays for last 12 months
      for (let i = 11; i >= 0; i--) {
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
        monthLabels.push(`${months[date.getMonth()]} ${date.getFullYear()}`);
        orderCounts.push(0);
        productCounts.push(0);
      }

      // Process orders
      if (Array.isArray(this.orderList) && this.orderList.length > 0) {
        this.orderList.forEach((order: any) => {
          if (order.orderDate) {
            try {
              const orderDate = new Date(order.orderDate);
              if (!isNaN(orderDate.getTime())) {
                const monthIndex = monthLabels.findIndex((label, idx) => {
                  const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - (11 - idx), 1);
                  return date.getFullYear() === orderDate.getFullYear() && 
                         date.getMonth() === orderDate.getMonth();
                });
                
                if (monthIndex !== -1) {
                  orderCounts[monthIndex]++;
                }
              }
            } catch (e) {
              console.warn('Invalid order date:', order.orderDate);
            }
          }
        });
      }

      // Process products
      if (Array.isArray(this.productList) && this.productList.length > 0) {
        this.productList.forEach((product: any) => {
          if (product.productDate) {
            try {
              const productDate = new Date(product.productDate);
              if (!isNaN(productDate.getTime())) {
                const monthIndex = monthLabels.findIndex((label, idx) => {
                  const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - (11 - idx), 1);
                  return date.getFullYear() === productDate.getFullYear() && 
                         date.getMonth() === productDate.getMonth();
                });
                
                if (monthIndex !== -1) {
                  productCounts[monthIndex]++;
                }
              }
            } catch (e) {
              console.warn('Invalid product date:', product.productDate);
            }
          }
        });
      }

      // Update chart data
      this.monthlyChartData = {
        labels: monthLabels,
        datasets: [
          {
            label: 'Orders',
            data: orderCounts,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          },
          {
            label: 'Products',
            data: productCounts,
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }
        ]
      };
    }

    updateWeeklyChart(): void {
      if ((!this.orderList || this.orderList.length === 0) && (!this.productList || this.productList.length === 0)) {
        return;
      }

      // Get last 7 days
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const currentDate = new Date();
      const dayLabels: string[] = [];
      const orderCounts: number[] = [];
      const productCounts: number[] = [];

      // Initialize arrays for last 7 days
      for (let i = 6; i >= 0; i--) {
        const date = new Date(currentDate);
        date.setDate(date.getDate() - i);
        const dayName = days[date.getDay()];
        const dayNumber = date.getDate();
        dayLabels.push(`${dayName} ${dayNumber}`);
        orderCounts.push(0);
        productCounts.push(0);
      }

      // Process orders for the last 7 days
      if (Array.isArray(this.orderList) && this.orderList.length > 0) {
        this.orderList.forEach((order: any) => {
          if (order.orderDate) {
            try {
              const orderDate = new Date(order.orderDate);
              if (!isNaN(orderDate.getTime())) {
                const daysDiff = Math.floor((currentDate.getTime() - orderDate.getTime()) / (1000 * 60 * 60 * 24));
                if (daysDiff >= 0 && daysDiff <= 6) {
                  const dayIndex = 6 - daysDiff;
                  if (dayIndex >= 0 && dayIndex < 7) {
                    orderCounts[dayIndex]++;
                  }
                }
              }
            } catch (e) {
              console.warn('Invalid order date:', order.orderDate);
            }
          }
        });
      }

      // Process products for the last 7 days
      if (Array.isArray(this.productList) && this.productList.length > 0) {
        this.productList.forEach((product: any) => {
          if (product.productDate) {
            try {
              const productDate = new Date(product.productDate);
              if (!isNaN(productDate.getTime())) {
                const daysDiff = Math.floor((currentDate.getTime() - productDate.getTime()) / (1000 * 60 * 60 * 24));
                if (daysDiff >= 0 && daysDiff <= 6) {
                  const dayIndex = 6 - daysDiff;
                  if (dayIndex >= 0 && dayIndex < 7) {
                    productCounts[dayIndex]++;
                  }
                }
              }
            } catch (e) {
              console.warn('Invalid product date:', product.productDate);
            }
          }
        });
      }

      // Update weekly chart data
      this.weeklyChartData = {
        labels: dayLabels,
        datasets: [
          {
            label: 'Orders',
            data: orderCounts,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4
          },
          {
            label: 'Products',
            data: productCounts,
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4
          }
        ]
      };
    }

    getStatusClass(status: string): string {
      const statusLower = status?.toLowerCase() || '';
      if (statusLower === 'pending') {
        return 'status-pending';
      } else if (statusLower === 'cancelled' || statusLower === 'canceled') {
        return 'status-cancelled';
      } else if (statusLower === 'completed') {
        return 'status-completed';
      }
      return 'status-pending'; // default to pending
    }
 
}
