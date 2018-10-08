import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AuthService } from '../../shared/auth.service';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {

	public signInForm: boolean = false;
	public signInData: any = {};
	public repeat_password: any;
	// public logInData: any = { 'username': 'decoairesbe@yopmail.com', 'password': 'D12345678.' };
	public logInData: any = { 'username': '', 'password': '' };

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public _auth: AuthService,
		private toastCtrl: ToastController,
		private storage: NativeStorage) {

		} 	

	ionViewDidLoad() { }

	presentToast(message) {
		let toast = this.toastCtrl.create({
			message: message,
			duration: 3000,
			position: 'bottom'
		});

		// toast.onDidDismiss(() => {
		// 	console.log('Dismissed toast');
		// });
		toast.present();
	}

	login() {
		this.navCtrl.push(TabsPage)
	}

	loginAuth0() {
		this._auth.logIn(this.logInData).then(
			(result: any) => {
				if (!result.error) {
					console.log(result)
					let userTokens = JSON.parse(result.data)
					this._auth.getUserByAccess(userTokens.access_token).then((data: any) => {

						let userId = (JSON.parse(data.data).sub).split("|")[1]
						console.log(userId)

						this.storage.setItem('userInfo', { userEmail: this.logInData.username }).then(
							() => this.navCtrl.push(TabsPage),
							error => console.error('Error storing item', error)
						);					

					})
				}
				else {
					this.presentToast(JSON.parse(result.error).error_description)
				}
			}
		)
	}

	signIn() {

		if (this.signInData.password != this.repeat_password) {
			this.presentToast("Passwords doesn't match")
		}
		else {
			this._auth.signIn(this.signInData).then(
				(result: any) => {
					if (!result.error) {
						console.log(result)
					}
					else {
						console.log(JSON.parse(result.error).message)
						this.presentToast(JSON.parse(result.error).message)
					}
				}
			)
		}
	}

}
