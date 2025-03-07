import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

  
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    { id: 0, name: 'PC', price: 1500, details: "Custom built and brand new"},
    { id: 1, name: 'Headphones', price: 100, details: "Slightly used. Sony."}, 
    { id: 2, name: 'iPad', price: 900, details: "Version 9. Used."}
  ];

  getProducts(): Observable<any[]> {
    return of(this.products); 
  }
  getProductById(id: number): Observable<{ id: number, name: string, price: number, details: string } | undefined> {
    const product = this.products.find(product => product.id === id);
    return of(product); 
  }
}
