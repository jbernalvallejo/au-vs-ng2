import { Component, OnInit } from '@angular/core';

import { DataRepository } from './datarepo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  customers = [];
  selectedCustomer = {};

  constructor(private _dataRepository : DataRepository) { }

  ngOnInit() {
     this.customers = this._dataRepository.getCustomers();
  }

  selectCustomer(customer) {
    this.selectedCustomer = customer;
  }
}
