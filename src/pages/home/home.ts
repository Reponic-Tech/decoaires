import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductPage } from '../product/product';
import { ContactPage } from '../contact/contact';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(
		public navCtrl: NavController,
	) {
	}

	goToProduct() {
		this.navCtrl.push(ProductPage);
	}

	goToContact() {
		this.navCtrl.push(ContactPage);
	}

}
