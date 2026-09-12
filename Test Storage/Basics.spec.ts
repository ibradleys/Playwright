
import { test, expect, type Page } from '@playwright/test';

test('practice working with web elements', async ({ page }) => {

// Navigate to the practice application
await page.goto('https://demo.playwright.dev/todomvc/');

    // Locator Types
// Locate by Role
page.getByRole('button', { name: 'Submit' })

// Locate by Text
page.getByText('Welcome')

// Locate by Label
page.getByLabel('Username')

// Locate by placeholder
page.getByPlaceholder('Enter your email')

// Locate by test ID
page.getByTestId('login-button')

// Locate with CSS
page.locator('#username')
// Or
page.locator('.submit-button')

    // Major Actions
// Fill text field
await page.getByLabel('Username').fill('Brad');

// Click
await page.getByRole('button', {
    name: 'Login'
}).click();

// Check checkbox
await page.getByLabel('Remember me').check();

// Select dropdown
await page
    .getByLabel('Country')
    .selectOption('US');

// Hover
await page
    .getByText('Products')
    .hover();

// Double-click
await page
    .getByText('Edit')
    .dblclick();

// Press keyboard key
await page
    .getByRole('textbox')
    .press('Enter');


    //Assertions
// Visible
await expect(page.locator('body')).toBeVisible();

// Hidden
await expect(page.locator('.hidden-element')).toBeHidden();

// Text
await expect(page.locator('body'))
    .toHaveText(/Login successful/i);

// Contains text
await expect(page.locator('body'))
    .toContainText('successful');

// Enabled
await expect(page.getByRole('button', { name: 'Login' })).toBeEnabled();

// Disabled
await expect(page.getByRole('button', { name: 'Submit' })).toBeDisabled();

// Checked
await expect(page.getByLabel('Remember me')).toBeChecked();

// Confirm URL
await expect(page)
    .toHaveURL(/dashboard/);

// Confirm Page Title
await expect(page)
    .toHaveTitle(/TodoMVC/);


})