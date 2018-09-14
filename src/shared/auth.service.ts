import { Injectable, NgZone } from '@angular/core';
// import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http';
import { URL } from '../shared/root-url';

@Injectable()
export class AuthService {
	
	accessToken: string;
	user: any;
	loggedIn: boolean;
	loading = true;
	root: string;
	aut0_url: string;
	
	

	constructor(
		public zone: NgZone,
		// private storage: Storage,
		public http: HTTP
	) {
		this.root = URL.url;
		this.aut0_url = URL.auth0_url;
	}

	signIn(signInData) {

		console.log('Auth service')
		console.log(JSON.stringify(signInData))

		let url = this.aut0_url + '/dbconnections/signup'

		signInData.client_id = "0Fj5vS8La1Y5ei2V3bAu2zZnaT6pxAN4"
		signInData.connection = "Username-Password-Authentication"
		// signInData.user_metadata = { plan: 'silver', team_id: 'a111' }		

		console.log(JSON.stringify(signInData))

		return this.http.post(url, signInData, {}).then(data => {

			console.log('sign in successfull');
			console.log(data);
			return data;
		}).catch(error => {

			console.error(error);
			return error;

		})
	}

	logIn(logInData) {

		console.log('Auth service')
		console.log(JSON.stringify(logInData))

		let url = this.aut0_url + '/oauth/token'

		logInData.client_id = "0Fj5vS8La1Y5ei2V3bAu2zZnaT6pxAN4"
		logInData.grant_type = 'password'
		logInData.scope = 'openid'

		return this.http.post(url, logInData, {}).then(data => {

			console.log('log in successfull');
			// console.log(data);
			return data;

		}).catch(error => {
			
			console.error(error);
			return error;

		})

	}

	getUserByAccess(accessToken){

		let url = this.aut0_url + '/userinfo';
		let header = { Authorization: 'Bearer '+ accessToken }

		return this.http.get(url,{}, header).then(data => {

			console.log('User info');
			// console.log(data);
			return data;

		}).catch(error => {

			console.error(error);
			return error;

		})

	}

}