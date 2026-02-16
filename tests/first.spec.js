const { test, expect } = require('@playwright/test');

test('Facebook Login Test', async ({ page }) => {

    // Open Facebook
    await page.goto('https://www.facebook.com/');

    // Enter email
    await page.fill('#email', 'tulanshch123@gmail.com');

    // Enter password
    await page.fill('#pass', 'Maa@110700');

    // Click login button
    await page.click('button[name="login"]');

    // Wait for homepage (example check)
    await page.waitForLoadState('networkidle');

});