import { inject } from 'aurelia-framework';

import { DataRepository } from './datarepo';

@inject(DataRepository)
export class App {
  customers = [];
  selectedCustomer = null;

  constructor(private _dataRepository : DataRepository) { }

  activate(bindingContext) {
    this.customers = this._dataRepository.getCustomers();
  }

  selectCustomer(customer) {
    this.selectedCustomer = customer;
  }
}
