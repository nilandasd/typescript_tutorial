import  { Builder, WebDriver, Browser } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import { querySelector, getElementById, getElementByXPath } from './helpers';
import server from '../../src/server';

const rootURL = 'http://backend:80/';
let driver: WebDriver;

beforeAll(async () => {
  let options = new chrome.Options();
  options.headless();
  driver = await new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeOptions(options)
    .build();

  await server.start();
  // tslint:disable-next-line:no-console
  console.log('webdriver built');

  await driver.get(rootURL);
  // tslint:disable-next-line:no-console
  console.log('navigated to page');
}, 10_000);

afterEach(async () => await driver.quit());
afterAll(async () => await server.stop());

describe("Index Page", () => {
  it('renders the page', async () => {
    const header = await querySelector('.header', driver)
    const actual = await header.getText()
    const expected = 'Index Page'
    expect(actual).toEqual(expected)
  }, 30_000)
});
