import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = []; // Corrected variable name to `products` (plural)

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    // Fetch all products, not a single product
    this.productService.getProducts().subscribe(data => {
      this.products = data; // Assign the list of products
      console.log(this.products); // Debugging: Log the products array
    });
  }

  viewDetails(id: number) {
    this.router.navigate(['/products', id]); // Navigate to product details
  }
}