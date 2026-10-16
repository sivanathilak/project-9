import { Injectable } from '@angular/core';
import { Office } from '../models/office';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  private offices: Office[] = [
    {
      id: 1,
      name: 'Los Angeles Office',
      location: 'Los Angeles, CA',
      employees: 25
    },
    {
      id: 2,
      name: 'New York Office',
      location: 'New York, NY',
      employees: 40
    },
    {
      id: 3,
      name: 'Chicago Office',
      location: 'Chicago, IL',
      employees: 18
    }
  ];

  getOffices(): Office[] {
    return this.offices;
  }
}