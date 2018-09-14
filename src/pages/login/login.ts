import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AuthService } from '../../shared/auth.service';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {

	public signInForm: boolean = false;
	public signInData: any = {};
	public repeat_password: any;
	public logInData: any = {'username' : 'test@gmail.com', 'password' : 'A12345678.' };

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public _auth: AuthService,
		private toastCtrl: ToastController) {
	}

	ionViewDidLoad() { 
		this.presentToast('hola');
	}

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
					this._auth.getUserByAccess(userTokens.access_token).then((data : any) => {
							
						let userId = (JSON.parse(data.data).sub).split("|")[1]
						console.log(userId)
						this.navCtrl.push(TabsPage)					

					} )
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
					else{
						console.log(JSON.parse(result.error).message)						
						this.presentToast(JSON.parse(result.error).message)
					}
				}
			)
		}
	}

}
