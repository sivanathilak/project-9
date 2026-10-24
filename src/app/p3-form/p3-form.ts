
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../services/customer';

@Component({
  selector: 'app-p3-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './p3-form.html',
  styleUrl: './p3-form.css'
})
export class P3Form {

  private customerService = inject(CustomerService);

  firstName = '';
  lastName = '';
  email = '';
  phone = '';

  addCustomer(): void {
    if (!this.firstName.trim() || !this.lastName.trim()) {
      alert('Please enter a first and last name.');
      return;
    }

    this.customerService.addCustomer({
      customerId: 'CUST-' + Date.now(),
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone
    });

    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.phone = '';
  }
}

