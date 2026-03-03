const puppeteer = require('puppeteer');

(async () => {
  console.log('Starting browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Set viewport to desktop width
  await page.setViewport({
    width: 1200,
    height: 1080,
    deviceScaleFactor: 2
  });
  
  console.log('Loading Danish version of website...');
  await page.goto('https://clara-web-phi.vercel.app', {
    waitUntil: 'networkidle0',
    timeout: 60000
  });
  
  // Ensure Danish language is selected (it's the default)
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  // Get the full page height
  const bodyHeight = await page.evaluate(() => {
    return document.documentElement.scrollHeight;
  });
  
  console.log(`Page height: ${bodyHeight}px`);
  console.log('Generating continuous scroll PDF...');
  
  await page.pdf({
    path: 'CLARA-website-Danish-continuous.pdf',
    width: '1200px',
    height: `${bodyHeight}px`,
    printBackground: true,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    displayHeaderFooter: false,
    pageRanges: '1'
  });
  
  console.log('PDF saved as CLARA-website-Danish-continuous.pdf');
  await browser.close();
})();
