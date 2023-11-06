import { By, until, WebDriver } from 'selenium-webdriver';

const waitUntilTime = 20000

async function querySelector(selector: string, driver: WebDriver) {
  const el = await driver.wait(
    until.elementLocated(By.css(selector)),
    waitUntilTime
  );
  return await driver.wait(until.elementIsVisible(el), waitUntilTime)
}

async function getElementById(id: string, driver: WebDriver) {
  const el = await driver.wait(
    until.elementLocated(By.id(id)),
    waitUntilTime
  );
  return await driver.wait(until.elementIsVisible(el), waitUntilTime);
}

async function getElementByXPath(xpath: string, driver: WebDriver) {
  const el = await driver.wait(
    until.elementLocated(By.xpath(xpath)),
    waitUntilTime
  );
  return await driver.wait(until.elementIsVisible(el), waitUntilTime);
}

export { querySelector, getElementById, getElementByXPath };
