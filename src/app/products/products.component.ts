import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productData : any[] = [];
  filteredProducts : any[] = [];
  selectedFilter : string = '';
  searchTerm : string = '';

  constructor(private dashboardService : DashboardService, private router : Router) {
 
   }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if(!token){
      this.router.navigate(['/'])
    }
    if(token){
      this.dashboardService.productAll()
      .subscribe(
        (res: any) => {
          // Handle both array response and object with data property
          this.productData = Array.isArray(res) ? res : (res.data || []);
          this.applyFilters();
        }
      )
    }
  }

  applyFilters(): void {
    let filtered = [...this.productData];

    // Apply price filter
    if (this.selectedFilter && this.selectedFilter !== '') {
      const [min, max] = this.selectedFilter.split('-').map(Number);
      filtered = filtered.filter(product => {
        const price = Number(product.price);
        return price >= min && price <= max;
      });
    }

    // Apply search filter
    if (this.searchTerm && this.searchTerm.trim() !== '') {
      const searchLower = this.searchTerm.toLowerCase().trim();
      filtered = filtered.filter(product => {
        const itemName = (product.itemName || '').toLowerCase();
        const productDate = (product.productDate || '').toString().toLowerCase();
        return itemName.includes(searchLower) || productDate.includes(searchLower);
      });
    }

    this.filteredProducts = filtered;
  }

  onFilterChange(): void {
    this.applyFilters();
  }

  onSearchChange(): void {
    this.applyFilters();
  }
}
