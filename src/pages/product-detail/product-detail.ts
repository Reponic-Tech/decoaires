import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductServiceProvider } from '../../providers/product-service/product-service';
import { ProductPage } from '../product/product';

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

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private _productService: ProductServiceProvider) {

		this.productId = navParams.get('productId')
	}

	ionViewDidLoad() {
		this.getProductDetail();
	}

	getProductDetail() {

		this._productService.getProductDetail(this.productId).then(
			(result: any) => {
				this.productDetail = JSON.parse(result)
			}
		)
	}

	submitProduct() {
		this._productService.editProductDetail(this.productId, this.productDetail).then(
			(result: any) => {
				if(!result.error){
					this.productEditForm = false;
					console.log(this.productEditForm)
					this.getProductDetail();
				}
			}
		)
	}

	deleteProduct(){
		this._productService.deleteProduct(this.productId).then(
			(result: any) => {
				this.navCtrl.push(ProductPage);
			}
		)
	}

}
