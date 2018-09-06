import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ProductServiceProvider } from '../../../providers/product-service/product-service';


/**
 * Generated class for the CreateProductModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
	selector: 'page-create-product-modal',
	templateUrl: 'create-product-modal.html',
	providers: [ProductServiceProvider]
})
export class CreateProductModalPage {

	public productDetail = {};

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public _productService: ProductServiceProvider,
		public viewCtrl: ViewController) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CreateProductModalPage');
	}

	submitProduct() {

		this._productService.createProduct(this.productDetail).then(
			(result: any) => {
				this.dismiss();
			}
		)
	}

	dismiss() {
		this.viewCtrl.dismiss();
	}

}
