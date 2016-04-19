import angular from 'angular';
import ComponentRouter from '@angular/router/angular1/angular_1_router';
import UISelect from 'angular-ui-select/select.min';
import ngSanitize from 'angular-sanitize';
import Navbar from 'components/navbar/navbar';
import ServiceFactory from './app.utils';

import '../style/app.scss';
import 'angular-ui-select/select.min.css';

let AppComponent = {
  template: `
        <div class="container-fluid">
          <navbar></navbar>
          <div class="A5 landscape">
            <section class="box sheet">
              <article>This is in paper</article>
            </section>
          </div>
        </div>
    `,
  controller: () => new AppController()
};

class AppController {

  constructor() {
    this.people = [
      { name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
      { name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
      { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
      { name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
      { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
      { name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
      { name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
      { name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
      { name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
      { name: 'Nicolás',   email: 'nicole@email.com',    age: 43, country: 'Colombia' }
    ];

    this.selected = this.people[0];
  }

}

angular
  .module('synopsis', ['ngComponentRouter', 'ui.select', 'ngSanitize'])
  .config(($locationProvider) => $locationProvider.html5Mode(true))
  .value('$routerRootComponent', 'app')
  .component('app', AppComponent)
  .component('navbar', Navbar);

angular
  .element(document)
  .ready(() => angular.bootstrap(document, ['synopsis']));

export default AppController;
