import { browser, by, element } from 'protractor';

export class PhonesListPage {
  navigateTo() {
    return browser.get('/');
  }

  getPageTitle() {
    return element(by.css('app-root app-phone-list-container h1')).getText();
  }

  getPhonesCount() {
    return element
      .all(by.css('app-root app-phone-list-container app-phone-detail'))
      .count();
  }
}
