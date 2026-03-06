import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('pageerror', err => {
    console.error('REACT_CRASH_MESSAGE_FOUND:', err.toString());
  });

  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.error('CONSOLE_ERROR:', msg.text());
    }
  });

  await page.goto('http://localhost:5173', { waitUntil: 'load' });
  await new Promise(r => setTimeout(r, 2000));
  await browser.close();
})();
