import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ProductDetailPage } from '../product-detail/product-detail';
import { HTTP } from '@ionic-native/http';
import { ProductServiceProvider } from '../../providers/product-service/product-service';
import { CreateProductModalPage } from '../modals/create-product-modal/create-product-modal';


// @IonicPage()
@Component({
	selector: 'page-product',
	templateUrl: 'product.html',
	providers: [ProductServiceProvider]
})
export class ProductPage {

	public productList;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public http: HTTP,
		private _productService: ProductServiceProvider,
		public modalCtrl: ModalController

	) {
	}

	ionViewDidLoad() {

		this._productService.getProducts().then(
			(result: any) => {
				this.productList = JSON.parse(result)
				console.log('Product List')
				console.log(this.productList)
			}
		)
	}

	openCreateModal() {
		let profileModal = this.modalCtrl.create(CreateProductModalPage);
		profileModal.present();
	}

	goToDetail(id) {
		this.navCtrl.push(ProductDetailPage, { productId: id });
	}

}
