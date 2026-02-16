
const {test, expect} = require('@playwright/test');
// Firstly we need to import the thing because we can use the method which is associated with the test and expect 

//Once we did import we need to create the test for intracting the thing we want to use in 

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

 // await page.getByRole('link',{name:'Get started'}). click();
  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
  await page.waitForLoadState('networkidle');
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Tulansh first test script', async({page})=>{

  await page.goto("https://testerbud.com/practice-xpath");




});