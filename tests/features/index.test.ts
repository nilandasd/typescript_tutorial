import driver from './webDriverHandle';
import server from '../../src/server';

beforeAll(async () => {
  await server.start();
  await driver.init();
}, 10_000);

afterEach(async () => await driver.quit());
afterAll(async () => await server.stop());

describe("Index Page", () => {
  it('renders the page', async () => {
    const header = await driver.querySelector('.header')
    const actual = await header.getText()
    const expected = 'Index Page'
    expect(actual).toEqual(expected)
  }, 30_000)
});
