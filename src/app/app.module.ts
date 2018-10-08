import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { ProductPage } from '../pages/product/product';
import { ProductDetailPage } from '../pages/product-detail/product-detail';
import { AuthService } from '../shared/auth.service';
import { IonicStorageModule } from '@ionic/storage';

import { HTTP } from '@ionic-native/http';
import { ProductServiceProvider } from '../providers/product-service/product-service';
import { CreateProductModalPage } from '../pages/modals/create-product-modal/create-product-modal';
import { AdminPage } from '../pages/admin/admin';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { NativeStorage } from '@ionic-native/native-storage';

@NgModule({
	declarations: [
		MyApp,
		ContactPage,
		HomePage,
		TabsPage,
		LoginPage,
		ProductPage,
		ProductDetailPage,
		CreateProductModalPage,
		AdminPage
	],
	imports: [
		BrowserModule,
		IonicStorageModule.forRoot(),
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		ContactPage,
		HomePage,
		TabsPage,
		LoginPage,
		ProductPage,
		ProductDetailPage,
		CreateProductModalPage,
		AdminPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		AuthService,
		HTTP,
		NativeStorage,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		ProductServiceProvider,
		UserServiceProvider,
	]
})
export class AppModule { }
