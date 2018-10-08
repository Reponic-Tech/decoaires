import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';


@Component({
	selector: 'page-admin',
	templateUrl: 'admin.html',
})
export class AdminPage {

	public usersList: any;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public _userService: UserServiceProvider) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AdminPage');
		this.getCredentials();
	}

	getCredentials() {

		this._userService.getCredentials().then(
			(result: any) => {

				console.log(JSON.parse(result))
				let credentials_token = JSON.parse(result).access_token
				// console.log(credentials)								
				this._userService.getUsers(credentials_token).then(
					(result: any) => {												
						this.usersList = JSON.parse(result)
						console.log(this.usersList)
					}
				)
			}
		)		
	}

}
