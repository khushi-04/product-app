import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = []; 

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
      this.productService.getProducts().subscribe(data => {
      this.products = data; 
    });
  }
  

  viewDetails(id: number) {
    this.router.navigate(['/products', id]); 
  }
}