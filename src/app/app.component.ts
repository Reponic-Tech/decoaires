import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import Auth0Cordova from '@auth0/cordova';
import { ProductDetailPage } from '../pages/product-detail/product-detail';
import { AdminPage } from '../pages/admin/admin';


@Component({
	templateUrl: 'app.html'
})
export class MyApp {
		// rootPage:any = AdminPage;
	rootPage: any = LoginPage;

	constructor(
		platform: Platform,
		statusBar: StatusBar,
		splashScreen: SplashScreen,
	) {

		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			statusBar.styleDefault();
			splashScreen.hide();

			(window as any).handleOpenURL = (url: string) => {
				Auth0Cordova.onRedirectUri(url);
			}
		});
	}
}
