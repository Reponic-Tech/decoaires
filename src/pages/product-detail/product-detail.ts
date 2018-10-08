import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductServiceProvider } from '../../providers/product-service/product-service';
import { ProductPage } from '../product/product';
import { NativeStorage } from '@ionic-native/native-storage';

// @IonicPage()
@Component({
	selector: 'page-product-detail',
	templateUrl: 'product-detail.html',
	providers: [ProductServiceProvider]
})
export class ProductDetailPage {

	public productEditForm: boolean = false;
	public productDetail = {}
	private productId: any;
	private userEmail: any;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private _productService: ProductServiceProvider,
		private storage: NativeStorage) {

		this.productId = navParams.get('productId')
	}

	ionViewDidLoad() {
		this.getProductDetail();
		this.getUserInfo();
	}

	getUserInfo() {
		this.storage.getItem('userInfo')
			.then(
				data => { this.userEmail = data.userEmail; console.log(this.userEmail) },
				error => console.error(error)
			);
	}

	getProductDetail() {

		this._productService.getProductDetail(this.productId).then(
			(result: any) => {
				this.productDetail = JSON.parse(result)
			}
		)

		// this.productDetail = { name: 'test', description: 'test', cloth_type: 'test', size: 'test'}
	}

	submitProduct() {
		this._productService.editProductDetail(this.productId, this.productDetail).then(
			(result: any) => {
				if (!result.error) {
					this.productEditForm = false;
					console.log(this.productEditForm)
					this.getProductDetail();
				}
			}
		)
	}

	deleteProduct() {
		this._productService.deleteProduct(this.productId).then(
			(result: any) => {
				this.navCtrl.push(ProductPage);
			}
		)
	}

	requestBudget(product) {
		this._productService.requestBudget(product, this.userEmail).then(
			(result: any) => {

				console.log(result)
			}
		)
	}

}
