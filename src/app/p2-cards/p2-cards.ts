import { Component, inject } from '@angular/core';
import { CustomerService } from '../services/customer';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-p2-cards',
  standalone: true,
  imports: [],
  templateUrl: './p2-cards.html',
  styleUrl: './p2-cards.css'
})
export class P2Cards {

  private customerService = inject(CustomerService);

  customers: Customer[] = this.customerService.getCustomers();

  selectCustomer(customer: Customer) {
    alert(
      `Selected customer: ${customer.firstName} ${customer.lastName}`
    );
  }

}

