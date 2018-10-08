import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AdminPage } from '../admin/admin';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AdminPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
