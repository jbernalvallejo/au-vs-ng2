import { Injectable } from '@angular/core';
import { customers } from './customerdata';

@Injectable()
export class DataRepository {
    getCustomers() {
        return customers;
    }
}