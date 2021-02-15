import { browser, by, element, ElementFinder, promise } from 'protractor';

export class AppPage {
  navigateToHome(): promise.Promise<any> {
    return browser.get(browser.baseUrl);
  }

  getWeatherText(): promise.Promise<string> {
    return element(by.css('title')).getText();
  }

  getWeatherIcon(): ElementFinder {
    return element(by.tagName('img'));
  }
}
