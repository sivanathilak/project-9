
import { Component, inject } from '@angular/core';
import { CustomerService } from '../services/customer';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-p4-delete',
  standalone: true,
  imports: [],
  templateUrl: './p4-delete.html',
  styleUrl: './p4-delete.css'
})
export class P4Delete {

  private customerService = inject(CustomerService);

  customers: Customer[] = this.customerService.getCustomers();

  deleteCustomer(index: number): void {
    this.customerService.deleteCustomer(index);
  }
}
