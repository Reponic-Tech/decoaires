import { Injectable } from '@angular/core';
import { URL } from '../../shared/root-url';
import { HTTP } from '@ionic-native/http';
/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

	public root: string;

	constructor(
		public http: HTTP) {
		console.log('Hello UserServiceProvider Provider');
		this.root = URL.auth0_url;
	}

	getCredentials() {

		let url_credentials = this.root + '/oauth/token'
		let body = {
			grant_type: 'client_credentials',
			client_id: '0Fj5vS8La1Y5ei2V3bAu2zZnaT6pxAN4',
			client_secret: 'pSOnlqewM8iWzRRZ5THDF0-X3Ik_0MTJUiD6xDey8FLdezStsDtUsltgJPgecPD_',
			audience: this.root + '/api/v2/'
		}

		return this.http.post(url_credentials, body, {}).then(data => {

			if (data.status == 200) {				
				return data.data
			}
			else {
				return { error: "status:" + data.status };
			}
		})
	}


	getUsers(access_token) {
		
		let url = this.root + '/api/v2/users'
		let header = { Authorization: 'Bearer ' + access_token }

		return this.http.get(url, {}, header).then(data => {

			if (data.status == 200) {
				return data.data;
			} else {
				return { error: "status:" + data.status };
			}

		})
	}

}
