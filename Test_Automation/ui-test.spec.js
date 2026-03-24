const { test, expect } = require('@playwright/test');
const fs = require('fs');

test('DemoQA Book Store UI Flow', async ({ page }) => {
    const username = 'tester'; 
    const password = 'Tester@123';

    await page.goto('https://demoqa.com/');

    await page.locator('text=Book Store Application').click();

    await page.locator('#login').click();

    await page.fill('#userName', username);
    await page.fill('#password', password);
    await page.click('#login');

    await expect(page.locator('#userName-value')).toHaveText(username);

    await page.locator('text=Go To Book Store').click();

    const searchBox = page.locator('#searchBox');
    await searchBox.fill('Learning JavaScript Design Patterns');

    const bookTitle = page.locator('text=Learning JavaScript Design Patterns');
    await expect(bookTitle).toBeVisible();

    const row = page.locator('tbody tr').first();

    const title = await row.locator('td').nth(1).textContent();
    const author = await row.locator('td').nth(2).textContent();
    const publisher = await row.locator('td').nth(3).textContent();

    const content = `Title: ${title}\nAuthor: ${author}\nPublisher: ${publisher}`;
    fs.writeFileSync('book_details.txt', content);

    console.log(content);

    await page.click('#submit');
});