const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://lambdatest.com');
  await page.screenshot({path: 'screenshots/lambdatest.png'});

  await browser.close();
})();
