import { customers } from './customerdata';

export class DataRepository {
    getCustomers() {
        return customers;
    }
}