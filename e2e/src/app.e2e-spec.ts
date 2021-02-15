import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  browser.waitForAngularEnabled(false);

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have a title', async () => {
    try {
      await page.navigateToHome();

      expect<any>(browser.getTitle()).toEqual('Angular');
    } catch (error) {
      console.log(error);
    }
  });

  it('should return a weather icon', async () => {
    try {
      await page.navigateToHome();

      expect<any>(page.getWeatherIcon()).toBeTruthy();
    } catch (error) {
      console.log(error);
    }
  });
});
