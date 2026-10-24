
import { Component, inject, OnInit } from '@angular/core';

import { ProductService } from '../services/product';
import { CustomerService } from '../services/customer';
import { OfficeService } from '../services/office';

@Component({
  selector: 'app-p1-console',
  standalone: true,
  imports: [],
  templateUrl: './p1-console.html',
  styleUrl: './p1-console.css'
})
export class P1Console implements OnInit {

  private productService = inject(ProductService);
  private customerService = inject(CustomerService);
  private officeService = inject(OfficeService);

  ngOnInit(): void {

    // PROJECT 1: PRODUCTS
    console.log('=== PRODUCTS ===');

    for (const product of this.productService.getProducts()) {
      console.log(
        `${product.name} - $${product.price} - ${product.category}`
      );
    }

    // PROJECT 1: CUSTOMERS
    console.log('=== CUSTOMERS ===');

    for (const customer of this.customerService.getCustomers()) {
      console.log(
        `${customer.customerId}: ${customer.firstName} ${customer.lastName}`
      );
      console.log(`Email: ${customer.email}`);
      console.log(`Phone: ${customer.phone}`);
    }

    // PROJECT 1: OFFICES
    console.log('=== OFFICES ===');

    for (const office of this.officeService.getOffices()) {
      console.log(
        `${office.name} - ${office.location} - ${office.employees} employees`
      );
    }

  }
}
