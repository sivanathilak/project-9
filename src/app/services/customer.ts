import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customers: Customer[] = [
    {
      customerId: 'CUST-001',
      firstName: 'Alice',
      lastName: 'Smith',
      email: 'alice.smith@example.com',
      phone: '555-0101'
    },
    {
      customerId: 'CUST-002',
      firstName: 'Bob',
      lastName: 'Johnson',
      email: 'bob.j@example.com',
      phone: '555-0102'
    },
    {
      customerId: 'CUST-003',
      firstName: 'Carol',
      lastName: 'Williams',
      email: 'carol.w@example.com',
      phone: '555-0103'
    }
  ];

  getCustomers(): Customer[] {
    return this.customers;
  }
}