import { Component, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Table } from 'primeng/table';
import { Customer, Representative } from './customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  customers: Customer[];
 selectedIndex = null;
	selectedPerson = null;

  representatives: Representative[];

  statuses: any[];

  loading: boolean = true;

  @ViewChild('dt') table: Table;

  constructor(private customerService: CustomerService, private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
      this.customerService.getCustomersLarge().then(customers => {
          this.customers = customers;
          this.loading = false;
      });

      this.representatives = [
          {name: "Amy Elsner", image: 'amyelsner.png'},
          {name: "Anna Fali", image: 'annafali.png'},
          {name: "Asiya Javayant", image: 'asiyajavayant.png'},
          {name: "Bernardo Dominic", image: 'bernardodominic.png'},
          {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
          {name: "Ioni Bowcher", image: 'ionibowcher.png'},
          {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
          {name: "Onyama Limba", image: 'onyamalimba.png'},
          {name: "Stephen Shaw", image: 'stephenshaw.png'},
          {name: "XuXue Feng", image: 'xuxuefeng.png'}
      ];

      this.statuses = [
          {label: 'Unqualified', value: 'unqualified'},
          {label: 'Qualified', value: 'qualified'},
          {label: 'New', value: 'new'},
          {label: 'Negotiation', value: 'negotiation'},
          {label: 'Renewal', value: 'renewal'},
          {label: 'Proposal', value: 'proposal'}
      ]
      this.primengConfig.ripple = true;
  }





	selectPerson(person, index) {
		this.selectedIndex = index;
		this.selectedPerson = person;
	};
}
