import 'selenium-webdriver/firefox';
import  { Builder, WebDriver } from 'selenium-webdriver';
import { querySelector, getElementById, getElementByXPath } from './helpers';
import server from '../../src/server';

const rootURL = 'http://localhost:80';
let driver: WebDriver;

beforeAll(async () => {
  server.start();
});

beforeEach(async () => {
  driver = await new Builder().forBrowser('firefox').build();
  await driver.get(rootURL);
}, 60_000);

afterEach(async () => await driver.quit());

describe("Index Page", () => {
  it('renders the page', async () => {
    const anchor = await querySelector('.header', driver)
    const actual = await anchor.getText()
    const expected = 'Index Page'
    expect(actual).toEqual(expected)
  }, 60_000)
});
