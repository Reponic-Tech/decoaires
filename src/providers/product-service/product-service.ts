import { Injectable } from '@angular/core';
import { URL } from '../../shared/root-url';
import { HTTP } from '@ionic-native/http';

@Injectable()
export class ProductServiceProvider {

	public root: string;

	constructor(public http: HTTP) {

		this.root = URL.url;
	}

	getProducts() {

		let url = this.root + 'products/'
		return this.http.get(url, {}, {}).then(data => {

			if (data.status == 200) {
				return data.data;
			} else {
				return { error: "status:" + data.status };
			}

		})
	}

	getProductDetail(id) {

		let url = this.root + 'products/' + id
		return this.http.get(url, {}, {}).then(data => {

			if (data.status == 200) {
				return data.data;
			} else {
				return { error: "status:" + data.status };
			}

		})
	}

	createProduct(data){

		let url = this.root + 'products/'
		return this.http.post(url, data, {}).then(data => {

			if (data.status == 200) {
				return data.data;
			} else {
				return { error: "status:" + data.status };
			}

		})
	}

	editProductDetail(id, data) {

		let url = this.root + 'products/' + id + '/'
		return this.http.put(url, data, {}).then(data => {

			if (data.status == 200) {
				return data.data;
			} else {
				return { error: "status:" + data.status };
			}

		})
	}

	deleteProduct(id) {

		let url = this.root + 'products/' + id + '/'
		return this.http.delete(url, {}, {}).then(data => {

			if (data.status == 200) {
				return data.data;
			} else {
				return { error: "status:" + data.status };
			}

		})
	}

}
